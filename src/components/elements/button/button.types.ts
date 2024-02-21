import type { IconWeight } from '@phosphor-icons/react';

export interface ButtonProps {
  as?: 'button' | 'a';
  variant?: 'primary' | 'secondary';
  withBorder?: boolean;
  small?: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: MouseEvent) => void;
  icon?: string;
  iconWeight?: IconWeight;
}
