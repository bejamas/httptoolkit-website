import { Alien, CaretDown, RocketLaunch, Sparkle } from '@phosphor-icons/react/dist/ssr';

import { Badge } from '@/components/elements/badge';
import { Button } from '@/components/elements/button';
import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { SquareIcon } from '@/components/elements/square-icon';
import { Text } from '@/components/elements/text';
import { Dropdown } from '@/components/modules/dropdown';

export default async function Home() {
  return (
    <Container>
      <Heading>What is HTTP Toolkit? - XL</Heading>
      <Heading as="h2" fontSize="l">
        What is HTTP Toolkit? - L
      </Heading>
      <Heading as="h3" fontSize="m">
        What is HTTP Toolkit? - M
      </Heading>
      <Heading as="h4" fontSize="s" color="cinnarbarRed">
        What is HTTP Toolkit? - S
      </Heading>
      <Heading as="h5" fontSize="xs">
        What is HTTP Toolkit? - XS
      </Heading>
      <Text textAlign="center">
        This is a paragraph Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or
        inject errors
      </Text>
      <Text color="electricLightBlue">
        This is a paragraph Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or
        inject errors
      </Text>
      <Text color="cinnarbarRed" fontWeight="medium">
        This is a paragraph orange and bold, Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite,
        redirect, or inject errors
      </Text>
      <Button withBorder icon={CaretDown}>
        test
      </Button>
      <Button variant="secondary" icon={RocketLaunch}>
        test
      </Button>
      <Dropdown
        variant="secondary"
        items={[
          {
            content: 'Example',
            as: 'button',
          },
          {
            content: 'Example',
            as: 'a',
            href: '/',
          },
        ]}
      >
        test
      </Dropdown>
      <Badge icon={Alien}>Intercept</Badge>
      <Badge icon={Sparkle} variant="secondary" additionalText="Edit">
        Intercept
      </Badge>

      <SquareIcon icon={Alien} />
      <SquareIcon icon={Alien} size="large" />
      <SquareIcon icon={Alien} variant="secondary" />
      <SquareIcon icon={Alien} variant="tertiary" />
    </Container>
  );
}
