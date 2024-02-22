import type { ButtonProps } from '@/components/elements/button/button.types';

export interface DropdownProps extends Omit<ButtonProps, 'onClick' | 'href'> {
  items: {
    content: string;
    as?: 'button' | 'a';
    onClick?: () => void;
    href?: string;
  }[];
}
