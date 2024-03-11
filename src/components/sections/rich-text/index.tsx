import type { RichTextProps } from './rich-text.types';
import { termOfServicesComponents } from './themes/terms-of-services';

const COMPONENT_DICTIONARY: Record<RichTextProps['theme'], any> = {
  'terms-of-service': termOfServicesComponents,
};

export const RichText = ({ content: Content, theme }: RichTextProps) => {
  return <Content components={COMPONENT_DICTIONARY[theme]} />;
};
