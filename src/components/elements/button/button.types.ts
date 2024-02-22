import type { Icon, IconWeight } from '@phosphor-icons/react';
import type { AriaAttributes } from 'react';

export interface ButtonProps extends AriaAttributes {
  as?: 'button' | 'a';
  variant?: 'primary' | 'secondary';
  withBorder?: boolean;
  small?: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: MouseEvent) => void;
  href?: string;
  icon?: Icon;
  iconWeight?: IconWeight;
}
