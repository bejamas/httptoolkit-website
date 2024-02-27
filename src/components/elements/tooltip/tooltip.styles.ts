'use client';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import { styled } from '@/styles';

export const StyledTooltipContent = styled(RadixTooltip.Content)`
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 1;

  ${({ theme }) => `box-shadow: ${theme.colors.shadow}`}
`;
