'use client';

import type { StyledCardImageWrapperProps } from './card.types';

import { styled } from '@/styles';

export const StyledCardWrapper = styled.div`
  max-width: 656px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inkBlack};
  border-radius: 12px;
  box-shadow:
    0px 2px 24px 0px rgba(230, 232, 242, 0.05),
    0 0 0 1px ${({ theme }) => theme.colors.borderGradient};
`;

export const StyledCardImageWrapper = styled.div<StyledCardImageWrapperProps>`
  height: 216px;
  margin: 0px 48px 0;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  background:
    url(${({ $backgroundGradient }) => $backgroundGradient}) 50% 77%/110% 200% no-repeat,
    url(${({ $backgroundFuncGradient }) => $backgroundFuncGradient}) 100% no-repeat,
    url(${({ $backgroundDots }) => $backgroundDots}) 0% 0%/100% 100% no-repeat;
`;

export const StyledCardImage = styled.img`
  height: 216px;
`;

export const StyledCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 0 auto;
  padding: 84px 48px 28px;
`;
