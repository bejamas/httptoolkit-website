import { CaretDown, RocketLaunch, Sparkle } from '@phosphor-icons/react/dist/ssr';

import { Badge } from '@/components/elements/badge';
import { Button } from '@/components/elements/button';
import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import ShowCase from '@/components/elements/showcase';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';
import { Dropdown } from '@/components/modules/dropdown';
import type { DropdownOptionProps } from '@/components/modules/dropdown/dropdown.types';

export default async function Home() {
  const dropdownItems: DropdownOptionProps[] = [
    {
      content: 'Download for Android',
    },
    {
      content: 'Download for Linux',
      as: 'link',
      target: '_blank',
      href: 'https://www.google.com/',
    },
    {
      content: 'Download for Mac',
      as: 'link',
      href: '/blog',
    },
  ];

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
        <Text as="label" fontSize="xll" fontWeight="bold">
          Label XL
        </Text>
        <Text as="label" fontSize="m" fontWeight="bold">
          Label L
        </Text>
        <Text as="label" fontSize="s" fontWeight="bold">
          Label M
        </Text>
      </ShowCase>
      <ShowCase title="Badge">
        <Badge icon={Sparkle}>Intercept</Badge>
        <Badge icon={Sparkle} variant="secondary" additionalText="Edit">
          Pro Feature
        </Badge>
      </ShowCase>
      <ShowCase title="Button Primary">
        <Button as="button" $withBorder icon={CaretDown}>
          Download for macOs
        </Button>
        <Button icon={CaretDown} as="link" href="/blog">
          Download for macOs
        </Button>
      </ShowCase>
      <ShowCase title="Button Secondary">
        <Button icon={RocketLaunch} $variant="secondary">
          Go Pro!
        </Button>
        <Button icon={RocketLaunch} $small $variant="secondary">
          Go Pro!
        </Button>
      </ShowCase>
      <ShowCase title="Dropdown">
        <Dropdown $small items={dropdownItems} aria-label="Download Items">
          Download for macOS
        </Dropdown>
        <Dropdown $variant="primary" $withBorder items={dropdownItems} aria-label="Download Items">
          Download for macOS
        </Dropdown>
      </ShowCase>
      <ShowCase title="Theme toggle">
        <ThemeToggle />
      </ShowCase>
    </Container>
  );
}
