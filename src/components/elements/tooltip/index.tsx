'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';

import type { TooltipProps } from './tooltip.types';

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
          {text}
          <RadixTooltip.Arrow className="TooltipArrow" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
