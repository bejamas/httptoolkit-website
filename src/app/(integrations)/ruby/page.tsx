import type { Metadata } from 'next/types';
import { Suspense } from 'react';

import { MockResponseFeatures } from '@/components/common-sections/mock-response-features';
import { RewriteAnything } from '@/components/common-sections/rewrite-anything';
import { Testimonials } from '@/components/common-sections/testimonials';
import { RubyLogo } from '@/components/elements/icon';
import { IntegrationHttpTookitFeatures } from '@/components/sections/integration/http-toolkit-features';
import { IntegrationCompatibility } from '@/components/sections/integration/single-page/compatibility';
import { IntegrationSinglePageHero } from '@/components/sections/integration/single-page/hero';
import { IntegrationSteps } from '@/components/sections/integration/single-page/steps';
import { IntegrationTextImage } from '@/components/sections/integration/single-page/text-image';
import { buildMetadata } from '@/lib/utils/build-metadata';

export const metadata: Metadata = buildMetadata({
  title: "Capture, debug and mock your Ruby app's HTTP traffic",
  description:
    'Intercept & view all Ruby HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors.',
});

export default function RubyIntegrationPage() {
  return (
    <>
      <IntegrationSinglePageHero
        title="Http Toolkit and Ruby integrated"
        text="Intercept & view all Ruby HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors."
        icon={RubyLogo}
        breadcrumbText="ruby"
      />
      <IntegrationTextImage
        title="HTTP Toolkit is a beautiful & open-source toolfor debugging, testing and building with HTTP(S)on Windows, Linux & Mac."
        subtitle="what is http toolkit?"
        image={{
          darkSrc: '/images/hero-placeholder-dark.webp',
          lightSrc: '/images/hero-placeholder-light.webp',
          alt: 'Mockup image',
        }}
      />
      <IntegrationSteps
        title="Getting `*started*`"
        steps={[
          [
            'Open a terminal via HTTP Toolkit',
            'Run any Ruby script, tool or server from that terminal',
            "Instantly see, debug & rewrite all Ruby's HTTP traffic",
          ],
        ]}
      />
      <IntegrationCompatibility
        title="Supported by Ruby"
        subtitle="compatibility"
        tools={[
          'net::http',
          'Faraday',
          'REST Client',
          'Mechanize',
          'Bundler',
          'HTTParty',
          'Excon',
          'open-uri',
          'gem install',
        ]}
      />
      <Suspense>
        <Testimonials />
      </Suspense>
      <IntegrationHttpTookitFeatures />
      <MockResponseFeatures />
      <RewriteAnything />
    </>
  );
}
