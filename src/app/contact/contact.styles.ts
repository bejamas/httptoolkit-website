'use client';

import { styled } from '@/styles';

export const StyledContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  padding: 32px 0 64px 0;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 96px;
    padding: 96px 0;
  }
`;
