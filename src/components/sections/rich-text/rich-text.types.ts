import type { MDXProps } from 'mdx/types';

export interface RichTextProps {
  content(props: MDXProps): JSX.Element;
  theme: 'terms-of-service';
}
