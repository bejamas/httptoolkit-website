'use client';

import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import {
  DropdownOption,
  DropdownOptionWrapper,
  DropdownOptionsWrapper,
  DropdownWrapper,
  LinkDropdownOption,
} from './dropdown.styles';
import type { DropdownOptionProps, DropdownProps, OptionComponentType } from './dropdown.types';

import { Button } from '@/components/elements/button';
import type { StyledButtonProps } from '@/components/elements/button/button.types';

const renderOptions = (items: DropdownOptionProps[], $variant: StyledButtonProps['$variant']) => {
  return items.map(({ content, as, href, onClick, ...aria }) => {
    const OptionComponent: OptionComponentType = as === 'link' || href ? LinkDropdownOption : DropdownOption;

    return (
      <DropdownOptionWrapper>
        <OptionComponent key={content} href={href} $variant={$variant} onClick={onClick} {...aria}>
          {content}
        </OptionComponent>
      </DropdownOptionWrapper>
    );
  });
};

export const Dropdown = ({
  children,
  items,
  icon = CaretDown,
  iconWeight = 'fill',
  $variant = 'secondary',
  ...buttonProps
}: Component<DropdownProps>) => {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false);

  // Sync controlled state with dropdown menu root state
  const handleOpenChange = (isOpen: boolean) => {
    setIsDropdowOpen(isOpen);
  };

  return (
    <DropdownMenu.Root modal={true} onOpenChange={handleOpenChange} open={isDropdownOpen}>
      <DropdownMenu.Trigger asChild>
        <DropdownWrapper $variant={$variant}>
          <Button icon={icon} iconWeight={iconWeight} $variant={$variant} $isDropdown {...buttonProps}>
            {children}
          </Button>
        </DropdownWrapper>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownOptionsWrapper align="start" sideOffset={5}>
          {Array.isArray(items) && renderOptions(items, $variant)}
        </DropdownOptionsWrapper>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
