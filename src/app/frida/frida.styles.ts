'use client';

import { screens, styled } from '@/styles';

export const StyledFridaColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;

  @media (min-width: ${screens['lg']}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 96px;
  }
`;

export const StyledFridaColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${screens['lg']}) {
    max-width: 586px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledGradientMobile = styled.div`
  position: absolute;
  top: -100px;
  width: 100%;
  height: 700px;
  display: block;
  visibility: visible;

  @media (min-width: ${screens['lg']}) {
    display: none;
    visibility: hidden;
  }
`;
