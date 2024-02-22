'use client';

import type { BadgeProps } from './badge.types';

import { css, styled } from '@/styles';
import { adjustOpacity } from '@/styles/helpers/adjust-opacity';

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const AdditionalText = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.label.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;
`;

export const StyledBadge = styled.span<BadgeProps>`
  display: flex;
  align-items: center;

  gap: 6px;

  font-size: ${({ theme }) => theme.fontSizes.label.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.label};
  letter-spacing: ${({ theme }) => theme.letterSpacing.label};
  text-transform: uppercase;

  border: 1px solid ${({ theme }) => adjustOpacity(theme.colors.lightGrey, 0.14)};

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          border-radius: 16px;
          padding: 6px 10px;
          color: ${({ theme }) => theme.colors.text.lightGrey};
          background-color: ${({ theme }) => theme.colors.mediumGrey};
        `;
      case 'secondary':
        return css`
          border-radius: 24px;
          padding: 8px 12px;
          color: ${({ theme }) => theme.colors.text.alwayLightGrey};
          background: linear-gradient(${({ theme }) => theme.colors.blueGradient});
        `;
    }
  }}

  & svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
