'use client';

import type { HeadingProps } from './heading.types';

import { styled } from '@/styles';

export const StyledHeading = styled.h1<HeadingProps>`
  font-size: ${({ theme, size }) => theme.fontSizes.heading.mobile[size || 'xl']};
  line-height: 110%;

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    font-size: ${({ theme, size }) => theme.fontSizes.heading.desktop[size || 'xl']};
  }
`;
