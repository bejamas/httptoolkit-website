'use client';

import type { StyledStackProps } from './stack.types';

import { styled } from '@/styles';

export const StyledStack = styled.div<StyledStackProps>`
  display: flex;
  flex-direction: ${props => props.$direction || 'column'};
  gap: ${props => props.$gap || '16px'};
`;
