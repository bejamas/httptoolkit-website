'use client';

import { screens, styled } from '@/styles';

export const StyledHeadingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;
  margin-bottom: 48px;
  text-align: center;

  @media (min-width: ${screens['lg']}) {
    text-align: start;
  }
`;
