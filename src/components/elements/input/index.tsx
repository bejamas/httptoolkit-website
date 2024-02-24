import { forwardRef } from 'react';

import { StyledInput, StyledInputBorder, StyledInputWrapper } from './input.styles';
import type { InputProps } from './input.types';
import { Text } from '../text';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ as = 'input', errorMessage, hasError = false, ...props }, ref) => {
    return (
      <StyledInputWrapper>
        <StyledInputBorder hasError={hasError} styledAs={as}>
          <StyledInput ref={ref} hasError={hasError} as={as} {...props} />
        </StyledInputBorder>
        {errorMessage && (
          <Text fontSize="s" color="cinnarbarRed">
            {errorMessage}
          </Text>
        )}
      </StyledInputWrapper>
    );
  },
);

Input.displayName = 'Input';
