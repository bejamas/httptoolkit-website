import { StyledButton, StyledButtonWrapper, StyledLink } from './button.styles';
import type { ButtonProps } from './button.types';
import { MovingBorder } from '../moving-border';

export const Button = ({
  variant = 'primary',
  small = false,
  type,
  withBorder = false,
  children,
  as = 'button',
  icon: Icon,
  iconWeight = 'fill',
  onClick,
  href,
  target,
  isDropdown = false,
  ...aria
}: Component<ButtonProps>) => {
  const BaseButton = () => {
    const ButtonComponent: (props: Component<ButtonProps>) => JSX.Element = as === 'Link' ? StyledLink : StyledButton;
    const newAs = as === 'Link' ? undefined : as;

    return (
      <ButtonComponent
        as={newAs}
        variant={variant}
        small={small}
        type={type}
        onClick={onClick}
        href={href}
        target={target}
        withBorder={withBorder}
        isDropdown={isDropdown}
        {...aria}
      >
        {children}
        {Icon && <Icon size={16} weight={iconWeight} />}
      </ButtonComponent>
    );
  };

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
