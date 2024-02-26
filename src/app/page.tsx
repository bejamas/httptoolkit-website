import { CaretDown, RocketLaunch, Sparkle } from '@phosphor-icons/react/dist/ssr';

import { Badge } from '@/components/elements/badge';
import { Button } from '@/components/elements/button';
import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import ShowCase from '@/components/elements/showcase';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';
import { Card } from '@/components/modules/card';
import { Dropdown } from '@/components/modules/dropdown';
import LightCardIllustration1 from '@/images/illustration/card-1-light.svg';
import CardIllustration1 from '@/images/illustration/card-1.svg';
import LightCardIllustration from '@/images/illustration/card-light.svg';
import CardIllustration from '@/images/illustration/card.svg';

export default async function Home() {
  return (
    <Container>
      <ShowCase title="Heading">
        <Heading color="textGradient">XL Text Gradient</Heading>
        <Heading color="cinnarbarRed">What is HTTP Toolkit? - XL</Heading>
        <Heading as="h2" fontSize="l">
          What is HTTP Toolkit? - L
        </Heading>
        <Heading as="h3" fontSize="m">
          What is HTTP Toolkit? - M
        </Heading>
        <Heading as="h4" fontSize="s">
          What is HTTP Toolkit? - S
        </Heading>
        <Heading as="h4" fontSize="s" fontWeight="medium">
          What is HTTP Toolkit? - S Medium
        </Heading>
        <Heading as="h5" fontSize="xs">
          What is HTTP Toolkit? - XS
        </Heading>
        <Heading as="h5" fontSize="xs" fontWeight="medium">
          What is HTTP Toolkit? - XS Medium
        </Heading>
      </ShowCase>

      <ShowCase title="Text">
        <Text fontSize="xl">
          XL Regular: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors.
        </Text>
        <Text fontSize="xl" fontWeight="medium">
          XL Medium: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors.
        </Text>
        <Text fontSize="l">
          L Regular: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors
        </Text>
        <Text fontSize="l" fontWeight="medium">
          L Medium: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors
        </Text>
        <Text fontSize="l" fontWeight="semibold">
          L Semibold: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors
        </Text>
        <Text fontSize="m">
          M: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors
        </Text>
        <Text fontSize="s">
          S: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject errors
        </Text>
        <Text fontSize="s" fontWeight="medium">
          S Medium: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors
        </Text>
        <Text fontSize="s" fontWeight="semibold">
          S Semibold: Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or inject
          errors
        </Text>
        <Text as="span" fontSize="xll" fontWeight="bold">
          Label XL
        </Text>
        <Text as="span" fontSize="l" fontWeight="bold">
          Label L
        </Text>
        <Text as="span" fontSize="s" fontWeight="bold">
          Label M
        </Text>
      </ShowCase>
      <ShowCase title="Badge">
        <Badge icon={Sparkle}>Intercept</Badge>
        <Badge icon={Sparkle} variant="secondary" additionalText="Edit">
          Pro Feature
        </Badge>
      </ShowCase>
      <ShowCase title="Buttons">
        <Button as="button" withBorder icon={CaretDown}>
          Download for macOs
        </Button>
        <Button icon={CaretDown} as="link" href="/blog">
          Download for macOs
        </Button>
        <Button as="button" variant="secondary" icon={RocketLaunch}>
          Go Pro!
        </Button>
        <Button as="button" small variant="secondary" icon={RocketLaunch}>
          Go Pro!
        </Button>
        <Dropdown
          as="button"
          variant="secondary"
          small
          items={[
            {
              content: 'Download for Android',
              as: 'button',
            },
            {
              content: 'Download for Linux',
              as: 'a',
              target: '_blank',
              href: 'https://www.google.com/',
            },
            {
              content: 'Download for Mac',
              as: 'Link',
              href: '/blog',
            },
          ]}
        >
          Download for macOS
        </Dropdown>
      </ShowCase>
      <ShowCase title="Card">
        <Card
          title="Simulate Network Issues & Redirect Traffic"
          text="Inject request timeouts, simulate connection failures, and silently redirect requests from one server to another. These features also ensure API stability and failover efficacy."
          darkImage={{
            src: CardIllustration.src,
            alt: 'Simulate',
          }}
        />
        <Card
          title="Targeted Request Handling: Proxy & Mock Server Capabilities"
          text="Precise matching lets you target the requests you care about. Match any requests sent anywhere by using HTTP Toolkit as a proxy, send requests directly to use it as a mock server."
          darkImage={{
            src: CardIllustration1.src,
            alt: 'Simulate',
          }}
        />
        <Card
          title="Simulate Network Issues & Redirect Traffic"
          text="Inject request timeouts, simulate connection failures, and silently redirect requests from one server to another. These features also ensure API stability and failover efficacy."
          colorScheme="light"
          darkImage={{
            src: CardIllustration.src,
            alt: 'Simulate',
          }}
          lightImage={{
            src: LightCardIllustration.src,
            alt: 'Simulate',
          }}
        />
        <Card
          title="Targeted Request Handling: Proxy & Mock Server Capabilities"
          text="Precise matching lets you target the requests you care about. Match any requests sent anywhere by using HTTP Toolkit as a proxy, send requests directly to use it as a mock server."
          colorScheme="light"
          darkImage={{
            src: CardIllustration1.src,
            alt: 'Simulate',
          }}
          lightImage={{
            src: LightCardIllustration1.src,
            alt: 'Simulate',
          }}
        />
      </ShowCase>
      <ShowCase title="Theme toggle">
        <ThemeToggle />
      </ShowCase>
    </Container>
  );
}
