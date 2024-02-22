'use client';

import type { SquareIconProps } from './square-icon.types';

import { css, styled } from '@/styles';
import { adjustOpacity } from '@/styles/helpers/adjust-opacity';

export const StyledSquareIcon = styled.div<Partial<SquareIconProps>>`
  display: flex;
  width: fit-content;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid ${({ theme }) => adjustOpacity(theme.colors.white, 0.14)};

  ${({ variant, size }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.inkBlack};

          & svg {
            color: ${({ theme }) => theme.colors.electricBlue};
            box-shadow: 0px 2.4000000953674316px 1.2000000476837158px 0px #c9d4fb1a inset;
            box-shadow: 0px -1.2000000476837158px 1.2000000476837158px 0px #102e971a inset;
            box-shadow: 0px 2.4000000953674316px 1.2000000476837158px 0px #c9d4fb1a inset;
            box-shadow: 0px -1.2000000476837158px 1.2000000476837158px 0px #102e971a inset;
          }

          ${() =>
            size === 'large' &&
            `
              border-width: 1.13px;
              border-radius: 16px;
              align-items: center;
              justify-content: center;
              width: 74px;
              height: 74px;
            `}
        `;

      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.darkGrey};

          & svg {
            color: ${({ theme }) => theme.colors.lightGrey};
          }
        `;

      case 'darker-secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.inkBlack};

          & svg {
            color: ${({ theme }) => theme.colors.lightGrey};
          }
        `;

      case 'tertiary':
        return css`
          color: ${({ theme }) => theme.colors.white}
          border-radius: 8px;
          padding: 12px;
          background-color: ${({ theme }) => theme.colors.mediumGrey};
          box-shadow: 0px 0px 24px 0px #8082891a inset;
        `;
    }
  }}
`;
