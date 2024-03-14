import type { RichTextProps } from './rich-text.types';
import { defaultComponents } from './themes/default';
import { policiesComponents } from './themes/policies';

const COMPONENT_DICTIONARY: Record<Required<RichTextProps>['theme'], any> = {
  policies: policiesComponents,
  default: defaultComponents,
};

export const RichText = ({ content: Content, theme = 'default' }: RichTextProps) => {
  return <Content components={COMPONENT_DICTIONARY[theme]} />;
};
