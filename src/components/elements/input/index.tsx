import { StyledInput, StyledInputBorder, StyledInputWrapper } from './input.styles';
import type { InputProps } from './input.types';
import { Text } from '../text';

export const Input = ({ as = 'input', errorMessage, hasError = false, ...props }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputBorder hasError={hasError} styledAs={as}>
        <StyledInput hasError={hasError} as={as} {...props} />
      </StyledInputBorder>
      {errorMessage && (
        <Text fontSize="s" color="cinnarbarRed">
          {errorMessage}
        </Text>
      )}
    </StyledInputWrapper>
  );
};
