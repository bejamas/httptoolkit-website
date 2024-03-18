'use client';

import { screens, styled } from '@/styles';

export const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;

  @media (min-width: ${screens['lg']}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 96px;
  }
`;
