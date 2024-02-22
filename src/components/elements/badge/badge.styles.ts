'use client';

import type { BadgeProps } from './badge.types';

import { css, styled } from '@/styles';

export const BadgeWrapper = styled.div`
  display: flex;
`;

export const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;

  gap: 6px;

  font-size: ${({ theme }) => theme.fontSizes.text.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          border-radius: 16px;
          padding: 6px 10px;
          color: ${({ theme }) => theme.colors.text.lightGrey};
          border: 1px solid ${({ theme }) => theme.colors.lightGrey};
          background-color: ${({ theme }) => theme.colors.mediumGrey};
        `;
      case 'secondary':
        return css`
          border-radius: 24px;
          padding: 8px 12px;
          color: ${({ theme }) => theme.colors.text.alwayLightGrey};
          background: linear-gradient(${({ theme }) => theme.colors.blueGradient});
          border: 1px solid ${({ theme }) => theme.colors.lightGrey};
        `;
    }
  }}
`;
