import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';

export default async function Home() {
  return (
    <Container>
      <Heading>HttpToolkit XL</Heading>
      <Heading as="h2" size="l">
        Heading L
      </Heading>
      <Heading as="h3" size="m">
        Heading M
      </Heading>
      <Heading as="h4" size="s">
        Heading S
      </Heading>
      <Heading as="h5" size="xs">
        Heading XS
      </Heading>
    </Container>
  );
}
