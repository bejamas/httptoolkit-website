'use client';

import { DropdownOption, DropdownOptionsWrapper, DropdownWrapper } from './dropdown.styles';
import type { DropdownProps } from './dropdown.types';

import { Button } from '@/components/elements/button';

export const Dropdown = ({ children, items, ...buttonProps }: Component<DropdownProps>) => {
  return (
    <DropdownWrapper>
      <Button {...buttonProps}>{children}</Button>
      <DropdownOptionsWrapper>
        {Array.isArray(items) &&
          items.map(item => (
            <DropdownOption key={item.content} as={item.as} href={item.href} onClick={item.onClick}>
              {item.content}
            </DropdownOption>
          ))}
      </DropdownOptionsWrapper>
    </DropdownWrapper>
  );
};
