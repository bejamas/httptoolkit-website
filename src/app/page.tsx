import { Badge } from '@/components/elements/badge';
import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { Sparkle, Alien, Logo } from '@/components/elements/icon/index';
import ShowCase from '@/components/elements/showcase';
import { SquareIcon } from '@/components/elements/square-icon';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';

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
      <ShowCase title="Icon">
        <SquareIcon icon={Alien} />
        <SquareIcon icon={Alien} $size="large" />
        <SquareIcon icon={Logo} $variant="secondary" />
        <SquareIcon icon={Alien} $variant="tertiary" />
      </ShowCase>
      <ShowCase title="Theme toggle">
        <ThemeToggle />
      </ShowCase>
    </Container>
  );
}
