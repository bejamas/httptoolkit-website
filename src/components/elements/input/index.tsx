import { StyledInput, StyledInputBorder, StyledInputWrapper } from './input.styles';
import type { InputProps } from './input.types';
import { Text } from '../text';

export const Input = ({ errorMessage, hasError = false, ...props }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInputBorder hasError={hasError}>
        <StyledInput hasError={hasError} {...props} />
      </StyledInputBorder>
      {errorMessage && (
        <Text fontSize="s" color="cinnarbarRed">
          {errorMessage}
        </Text>
      )}
    </StyledInputWrapper>
  );
};
