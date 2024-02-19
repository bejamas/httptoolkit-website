import { forwardRef } from 'react';

import { StyledText } from './text.styles';
import type { TextProps } from './text.types';

export const Text = forwardRef<HTMLDivElement, Component<TextProps>>((props, ref) => {
  const { children, className, as = 'p', size = 'xl' } = props;

  return (
    <StyledText {...ref} as={as} size={size} className={className}>
      {children}
    </StyledText>
  );
});

Text.displayName = 'Text';
