import { StyledButton, StyledButtonWrapper } from './button.styles';
import type { ButtonProps } from './button.types';
import { MovingBorder } from '../moving-border';

export const Button = ({
  variant = 'primary',
  small = false,
  type = 'button',
  withBorder = false,
  children,
  as = 'button',
  icon: Icon,
  iconWeight = 'fill',
  onClick,
  href,
  ...aria
}: Component<ButtonProps>) => {
  const BaseButton = () => (
    <StyledButton as={as} variant={variant} small={small} type={type} onClick={onClick} href={href} {...aria}>
      {children}
      {Icon && <Icon size={16} weight={iconWeight} />}
    </StyledButton>
  );

  if (withBorder) {
    return (
      <StyledButtonWrapper>
        <MovingBorder rx="30%" ry="30%" />
        <BaseButton />
      </StyledButtonWrapper>
    );
  }
  return <BaseButton />;
};
