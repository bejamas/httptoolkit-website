import type { Icon } from '@phosphor-icons/react';

import { StyledButton, StyledButtonWrapper } from './button.styles';
import type { ButtonProps } from './button.types';
import { MovingBorder } from '../moving-border';

export const Button = async (props: Component<ButtonProps>) => {
  const {
    variant = 'primary',
    small = false,
    type = 'button',
    withBorder = false,
    children,
    as = 'button',
    icon,
    iconWeight = 'fill',
  } = props;

  const IconComponent = icon && (await import('@phosphor-icons/react/dist/ssr').then(icons => icons[icon] as Icon));

  const base = () => (
    <StyledButton as={as} variant={variant} small={small} type={type} withBorder={withBorder}>
      {children}
      {IconComponent && <IconComponent size={16} weight={iconWeight} />}
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
