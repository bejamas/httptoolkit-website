'use client';

import { css, screens, styled } from '@/styles';

export const StyledFeaturesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${screens['lg']}) {
    gap: 96px;
  }
`;

const commonGradientStyles = css`
  position: absolute;
  height: 641px;

  @media (min-width: ${screens['lg']}) {
    height: 940px;
  }
`;

export const StyledGradientRight = styled.div`
  top: 65px;
  right: 0;
  transform: rotate(180deg);

  ${commonGradientStyles}
`;

export const StyledGradientLeft = styled.div`
  bottom: 376px;
  left: 0;

  ${commonGradientStyles}
`;
