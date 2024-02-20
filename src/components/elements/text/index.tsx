import { forwardRef } from 'react';

import { StyledText } from './text.styles';
import type { TextProps } from './text.types';

export const Text = forwardRef<HTMLDivElement, Component<TextProps>>((props, ref) => {
  const { children, className, as = 'p', fontSize = 'xl', fontWeight, color, textAlign } = props;

  return (
    <StyledText
      {...ref}
      as={as}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      className={className}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
});

Text.displayName = 'Text';
