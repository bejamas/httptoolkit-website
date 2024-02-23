import type { Icon, IconWeight } from '@phosphor-icons/react';
import type { AriaAttributes, AriaRole, HTMLAttributeAnchorTarget } from 'react';

export interface ButtonProps extends AriaAttributes {
  as?: 'button' | 'a' | 'Link';
  role?: AriaRole;
  target?: HTMLAttributeAnchorTarget;
  variant?: 'primary' | 'secondary';
  withBorder?: boolean;
  small?: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: MouseEvent) => void;
  href?: string;
  icon?: Icon;
  iconWeight?: IconWeight;
  isDropdown?: boolean;
}
