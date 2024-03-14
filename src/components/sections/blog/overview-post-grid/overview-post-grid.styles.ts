'use client';

import { screens, styled } from '@/styles';

export const StyledPostGridSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: 64px;

  @media (min-width: ${screens.lg}) {
    flex-direction: row;
  }
`;

export const StyledSubscriberBox = styled.aside`
  flex: 1;
  max-width: none;

  @media (min-width: ${screens.lg}) {
    min-width: 387px;
  }
`;
