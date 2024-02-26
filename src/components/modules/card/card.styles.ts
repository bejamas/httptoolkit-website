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
  padding-top: 28px;
  display: flex;
  justify-content: center;
  background-image: url(${({ $backgroundGradient }) => $backgroundGradient}),
    url(${({ $backgroundFuncGradient }) => $backgroundFuncGradient}), url(${({ $backgroundDots }) => $backgroundDots});
  background-position:
    center 140%,
    center,
    center;
  background-size:
    602px 384.19px,
    524px 248px,
    524px 248px;
  background-repeat: no-repeat;
`;

export const StyledCardImage = styled.img`
  height: 216px;
`;

export const StyledCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 56px 48px 28px;
`;
