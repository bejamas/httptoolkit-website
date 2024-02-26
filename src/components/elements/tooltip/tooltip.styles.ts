'use client';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import type { StyledTooltipContentProps } from './tooltip.types';

import { styled } from '@/styles';

export const StyledTooltipContent = styled(RadixTooltip.Content)<StyledTooltipContentProps>`
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 12px;
  padding: 8px 12px;
  z-index: 1;

  ${({ $colorScheme }) =>
    $colorScheme === 'dark'
      ? `
    box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  `
      : `
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.07);
  `}
`;
