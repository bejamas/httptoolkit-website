import {
  showLoginDialog,
  getLastUserData,
  getLatestUserData,
  loginEvents,
  goToCheckout,
  prefetchCheckout,
  initializeAuthUi,
} from '@httptoolkit/accounts';
import * as _ from 'lodash';
import { flow, observable, computed } from 'mobx';

import { isSSR } from '../util';

export class AccountStore {
  constructor() {
    if (!isSSR) {
      initializeAuthUi({
        refreshToken: false,
      });

      // The pricing lookup promise is always triggered at first load, within layout.tsx.
      window.pricingPromise.then(prices => {
        this.subscriptionPlans = prices;
      });
    }

    // Update account data automatically on login, logout & every 10 mins
    loginEvents.on('authenticated', async () => {
      await this.updateUser();
      loginEvents.emit('user_data_loaded');
    });

    if (!isSSR) {
      this.updateUser();
      setInterval(this.updateUser, 1000 * 60 * 10);
    }
    loginEvents.on('logout', this.updateUser);
  }

  getSKU = (tierCode, planCycle) => {
    return `${tierCode}-${planCycle}`;
  };

  @observable
  subscriptionPlans; // Set once the price loading has completed

  @observable
  modal = null;

  @observable
  waitingForPurchase = false;

  @observable
  user = !isSSR ? getLastUserData() : {};

  updateUser = flow(
    function* () {
      this.user = yield getLatestUserData();
    }.bind(this),
  );

  @computed get isLoggedIn() {
    return !!this.user.email;
  }

  @computed get isPaidUser() {
    // Set with the last known active subscription details
    const subscriptionExpiry = _.get(this, 'user.subscription.expiry');

    return !!subscriptionExpiry && subscriptionExpiry.valueOf() > Date.now();
  }

  @computed get subscription() {
    if (!this.isPaidUser) return {};

    const [paidTier, paidCycle] = this.user.subscription.plan.split('-');
    const status = this.user.subscription.status;

    return { paidTier, paidCycle, status };
  }

  login = flow(function* () {
    if (!this.isLoggedIn) {
      this.modal = 'login';
      yield showLoginDialog();
      this.modal = null;
    }
  }).bind(this);

  buyPlan = flow(
    function* (tierCode, planCycle) {
      this.reportPurchaseEvent('Select plan', tierCode, planCycle);
      const sku = this.getSKU(tierCode, planCycle);

      let loggingIn = true;
      if (!this.isLoggedIn) {
        this.modal = 'login';

        // Update account data automatically on login, logout & every 10 mins
        loginEvents.once('authenticated', async authResult => {
          // If a user logs in after picking a plan, they're going to go to the
          // checkout imminently. The API has to query Paddle to build that checkout,
          // so we start prefetching the redirect early, to kick that process off ASAP:
          const initialEmailResult = authResult?.idTokenPayload?.email;
          if (initialEmailResult && loggingIn) {
            // Check loggingIn to skip if cancelled
            // Start preparing to redirect immediately, without waiting for user_data_loaded.
            prefetchCheckout(initialEmailResult, sku, 'web');
          }
        });

        this.reportPurchaseEvent('Login started', tierCode, planCycle);
        yield showLoginDialog();
        if (this.isLoggedIn) {
          this.reportPurchaseEvent('Login completed', tierCode, planCycle);
        } else {
          this.reportPurchaseEvent('Login cancelled', tierCode, planCycle);
        }
      } else {
        this.reportPurchaseEvent('Already logged in', tierCode, planCycle);
      }

      loggingIn = false;

      if (!this.isLoggedIn || this.isPaidUser) {
        // Login cancelled or failed, or they have a plan already
        this.modal = null;
        return;
      }

      if (this.user?.banned) {
        alert('Your account has been blocked for abuse. Please contact help@httptoolkit.com.');
        return;
      }

      this.reportPurchaseEvent('Checkout started', tierCode, planCycle);

      // This redirects the entire page to the checkout:
      return goToCheckout(this.user.email, sku, 'web');
    }.bind(this),
  );

  reportPurchaseEvent(name, planName, planCycle) {
    const sku = this.getSKU(planName, planCycle);
    if (window.posthog) {
      posthog.capture(name, { planName, planCycle, sku });
    }
  }
}
