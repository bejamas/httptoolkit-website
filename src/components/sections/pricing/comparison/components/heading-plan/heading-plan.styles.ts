'use client';

import { StyledHeading } from '@/components/elements/heading/heading.styles';
import { styled } from '@/styles';

export const StyledHeadingPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    & ${StyledHeading} {
      text-align: left;
    }
  }
`;
