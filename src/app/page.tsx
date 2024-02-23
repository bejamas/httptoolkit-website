import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import ShowCase from '@/components/elements/showcase';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';

export default async function Home() {
  return (
    <Container>
      <ShowCase title="Heading">
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
      </ShowCase>

      <ShowCase title="Text">
        <Text>
          This is a paragraph Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or
          inject errors
        </Text>
        <Text color="electricLightBlue">
          This is a paragraph Intercept & view all your HTTP(S) Mock endpoints or entire servers Rewrite, redirect, or
          inject errors
        </Text>
      </ShowCase>
      <ShowCase title="Theme toggle">
        <ThemeToggle />
      </ShowCase>
    </Container>
  );
}
