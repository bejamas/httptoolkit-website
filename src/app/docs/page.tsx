import Content from './content.mdx';

import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { RichText } from '@/components/sections/rich-text';

export default function DocsPage() {
  return (
    <Container>
      <Heading color="textGradient">Docs</Heading>
      <RichText content={Content} />
    </Container>
  );
}
