'use client';

import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import * as HoverCard from '@radix-ui/react-hover-card';

import {
  DropdownHoverTrigger,
  DropdownOption,
  DropdownOptionsWrapper,
  DropdownWrapper,
  HoverCardContent,
  LinkDropdownOption,
} from './dropdown.styles';
import type { DropdownOptionProps, DropdownProps, OptionComponentType } from './dropdown.types';

import { Button } from '@/components/elements/button';
import type { StyledButtonProps } from '@/components/elements/button/button.types';

const renderOptions = (items: DropdownOptionProps[], $variant: StyledButtonProps['$variant']) => {
  return items.map(({ content, as, href, onClick, ...aria }) => {
    const OptionComponent: OptionComponentType = as === 'link' || href ? LinkDropdownOption : DropdownOption;

    return (
      <OptionComponent role="menuitem" key={content} href={href} $variant={$variant} onClick={onClick} {...aria}>
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
  $direction = 'bottom',
  ...buttonProps
}: Component<DropdownProps>) => {
  return (
    <DropdownWrapper $variant={$variant}>
      <HoverCard.Trigger asChild>
        <DropdownHoverTrigger>
          <Button as="button" icon={icon} iconWeight={iconWeight} $variant={$variant} $isDropdown {...buttonProps}>
            {children}
          </Button>
        </DropdownHoverTrigger>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCardContent align="start" sideOffset={5}>
          <DropdownOptionsWrapper
            $direction={$direction}
            $variant={$variant}
            $withBorder={buttonProps.$withBorder}
            role="menu"
          >
            {Array.isArray(items) && renderOptions(items, $variant)}
          </DropdownOptionsWrapper>
        </HoverCardContent>
      </HoverCard.Portal>
    </DropdownWrapper>
  );
};
