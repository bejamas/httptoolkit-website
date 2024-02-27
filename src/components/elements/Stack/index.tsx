import React from 'react';

import { StyledStack } from './stack.styles';
import type { StackProps } from './stack.types';

const Stack = ({ $gap, $direction, children }: StackProps) => {
  return (
    <StyledStack $gap={$gap} $direction={$direction}>
      {children}
    </StyledStack>
  );
};

export default Stack;
