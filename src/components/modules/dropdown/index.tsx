'use client';

import { CaretDown } from '@phosphor-icons/react/dist/ssr';

import { DropdownOption, DropdownOptionsWrapper, DropdownWrapper, LinkDropdownOption } from './dropdown.styles';
import type { DropdownOptionProps, DropdownProps, OptionComponentType } from './dropdown.types';

import { Button } from '@/components/elements/button';
import type { StyledButtonProps } from '@/components/elements/button/button.types';

const renderOptions = (items: DropdownOptionProps[], $variant: StyledButtonProps['$variant']) => {
  return items.map(({ content, as, href, onClick, ...aria }) => {
    const OptionComponent: OptionComponentType = as === 'link' ? LinkDropdownOption : DropdownOption;
    const newAs = as === 'link' ? undefined : as;

    return (
      <OptionComponent
        role="menuitem"
        key={content}
        as={newAs}
        href={href}
        $variant={$variant}
        onClick={onClick}
        {...aria}
      >
        {content}
      </OptionComponent>
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
  return (
    <DropdownWrapper $variant={$variant}>
      <Button icon={icon} iconWeight={iconWeight} $variant={$variant} $isDropdown {...buttonProps}>
        {children}
      </Button>
      <DropdownOptionsWrapper $variant={$variant} role="menu">
        {Array.isArray(items) && renderOptions(items, $variant)}
      </DropdownOptionsWrapper>
    </DropdownWrapper>
  );
};
