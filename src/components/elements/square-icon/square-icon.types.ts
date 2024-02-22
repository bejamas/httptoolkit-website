import type { Icon } from '@phosphor-icons/react';

export const SquareIconSizes = {
  medium: 32,
  large: 48,
};

export interface SquareIconProps {
  variant?: 'primary' | 'secondary' | 'darker-secondary' | 'tertiary';
  icon: Icon;
  size?: keyof typeof SquareIconSizes;
}
