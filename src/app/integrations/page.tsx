import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { AndroidLogo, DockerLogo, RocketLaunch, SealCheck, Wrench } from '@/components/elements/icon';
import type { FluidCardProps } from '@/components/modules/fluid-card/fluid-card.types';
import { IntegrationCTA } from '@/components/sections/integration/cta';
import { IntegrationGrid } from '@/components/sections/integration/grid';
import { IntegrationBento } from '@/components/sections/integration/single-page/bento';
import { IntegrationCompatibility } from '@/components/sections/integration/single-page/compatibility';
import { IntegrationSinglePageHero } from '@/components/sections/integration/single-page/hero';
import { IntegrationTextImage } from '@/components/sections/integration/single-page/text-image';

const integrationBentoCards: FluidCardProps[] = [
  {
    $variant: 'default',
    title: 'Get started instantly',
    text: 'No messing around with certificate files and wifi settings. \n\n Click the button, accept permissions, start capturing traffic.',
    icon: RocketLaunch,
  },
  {
    $variant: 'default',
    title: "Debug your Android device's HTTP requests",
    text: 'Scan a QR code on the device to start setup, or remotely connect debuggable devices via ADB. \n\n Reconnect again later in one tap. \n\n Supports Android Lollipop and later (v5 / API level 21+)',
    icon: Wrench,
  },
  {
    $variant: 'default',
    title: 'Capture & inspect encrypted HTTPS',
    text: 'Immediately view HTTPS on any device from apps that trust user-installed certificates, like Chrome.\n\n Enable trust in your own app with one tiny manifest change.\n\n On emulators & rooted devices, easily intercept HTTPS from any app, with automatic injection of a system certificate authority.',
    icon: SealCheck,
  },
  {
    $variant: 'highlighted',
    title: 'Want the full details?',
    text: 'Take a look at the in-depth guide to Android HTTP debugging.',
    buttonText: 'Learn more',
    buttonHref: '/learn-more',
  },
];

const integrationsCard = [
  {
    $showBadge: true,
    icon: AndroidLogo,
    title: 'Android',
    text: 'Android integration for apps and mobile browsers, including automated setup, per-app interception, and system-level certificate injection for complete visibility into emulators and rooted devices.',
    link: {
      href: '/example-1',
      target: '_blank',
    },
  },
  {
    icon: AndroidLogo,
    title: 'Javascript',
    text: 'Android integration for apps and mobile browsers, including automated setup, per-app interception, and system-level certificate injection for complete visibility into emulators and rooted devices.',
    link: {
      href: '/example-2',
      target: '_blank',
    },
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Container>
        <Heading color="textGradient">Integrations</Heading>
      </Container>
      <IntegrationSinglePageHero
        title="Http Toolkit and Docker integrated"
        text="Intercept & view all Docker HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors."
        icon={DockerLogo}
        breadcrumbText="docker"
      />
      <IntegrationGrid integrations={[...integrationsCard, ...integrationsCard, ...integrationsCard]} />
      <IntegrationCTA
        $variant="hero"
        title="Automatic setup and powerful integration for all your tools"
        text="With deep integrations into a huge range of popular components & tools, HTTP Toolkit lets you intercept mobile apps, whole devices, bash scripts, entire Docker containers and more, so you can see & modify anything in just one click."
      />
      <IntegrationCTA
        $variant="cta"
        title="Integrations"
        text="Explore a vast array of integrations and applications designed to streamline your work, consolidate information, and enhance collaboration effortlessly. "
        button={{
          $small: true,
          $variant: 'secondary',
          children: 'See all integrations',
        }}
      />
      <IntegrationTextImage
        title="HTTP Toolkit is a beautiful & open-source toolfor debugging, testing and building with HTTP(S)on Windows, Linux & Mac."
        subtitle="what is http toolkit?"
        image={{
          darkSrc: '/images/mockup-image.webp',
          lightSrc: '/images/mockup-image-light.webp',
          alt: 'Mockup image',
        }}
      />
      <IntegrationBento
        title="HTTP Toolkit is a beautiful & open-source toolfor debugging, testing and building with HTTP(S)on Windows, Linux & Mac."
        subtitle="what is http toolkit?"
        cards={integrationBentoCards}
      />
      <IntegrationCompatibility title="Supported by Docker" subtitle="compatibility" />
    </>
  );
}
