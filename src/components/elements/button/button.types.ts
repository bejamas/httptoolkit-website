import type { Icon, IconWeight } from '@phosphor-icons/react';
import type { AriaAttributes, AriaRole } from 'react';

export interface ButtonProps extends AriaAttributes {
  as?: 'button' | 'a' | 'Link';
  role?: AriaRole;
  variant?: 'primary' | 'secondary';
  withBorder?: boolean;
  small?: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: MouseEvent) => void;
  href?: string;
  icon?: Icon;
  iconWeight?: IconWeight;
}
