'use client';

import { screens, styled } from '@/styles';

export const StyledMobileWrapper = styled.div`
  display: block;

  @media (min-width: ${screens['lg']}) {
    display: none;
  }
`;
