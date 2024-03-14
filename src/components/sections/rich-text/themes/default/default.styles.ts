'use client';

import type { StyledSpacerProps } from './default.types';

import { Heading } from '@/components/elements/heading';
import { Link } from '@/components/elements/link';
import { Text } from '@/components/elements/text';
import { css, styled } from '@/styles';


export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text.darkGrey};
`;

export const StyledText = styled(Text)`
  margin-bottom: 6px;
`;

export const StyledBiggerText = styled(Text)`
  margin-bottom: 16px;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const StyledSectionBreak = styled.div<StyledSpacerProps>`
  ${({ $spacing }) => {
    switch ($spacing) {
      case 'policies':
        return css`
          margin-bottom: 26px;

          @media (min-width: ${({ theme }) => theme.screens.lg}) {
            margin-bottom: 42px;
          }
        `;
      case 'docs':
        return css`
          margin-bottom: 40px;

          @media (min-width: ${({ theme }) => theme.screens.lg}) {
            margin-bottom: 64px;
          }
        `;
      case 'simple':
        return css`
          margin-bottom: 24px;
        `;
      case 'normal':
        return css`
          margin-bottom: 48px;
        `;
      default:
        return css`
          margin-bottom: 48px;
        `;
    }
  }}
`;
