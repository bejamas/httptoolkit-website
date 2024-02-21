'use client';

import { StyledButton, StyledButtonWrapper } from './button.styles';
import type { ButtonProps } from './button.types';
import { MovingBorder } from '../moving-border';

export const Button = (props: Component<ButtonProps>) => {
  const { variant = 'primary', small = false, type = 'button', withBorder = false, children, as = 'button' } = props;

  const base = () => (
    <StyledButton as={as} variant={variant} small={small} type={type} withBorder={withBorder}>
      {children}
    </StyledButton>
  );

  if (withBorder) {
    return (
      <StyledButtonWrapper>
        <MovingBorder rx="30%" ry="30%" />
        {base()}
      </StyledButtonWrapper>
    );
  }
  return base();
};
