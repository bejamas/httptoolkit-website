import type { RichTextProps } from '../rich-text/rich-text.types';

import type { TableContentProps } from '@/components/modules/table-content/table-content.types';

export interface StyledContentWithTableProps {
  $bgVariant?: 'inkBlack' | 'darkGrey';
}

export interface ContentWithTableProps extends StyledContentWithTableProps {
  links: TableContentProps['links'];
  content?: RichTextProps['content'];

  // Content that is already parsed by remoteMdx
  richContent?: any;
}
