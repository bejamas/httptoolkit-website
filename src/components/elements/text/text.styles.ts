'use client';

import type { TextProps } from './text.types';

import { styled } from '@/styles';

export const StyledText = styled.p<TextProps>`
  font-size: ${({ theme, size }) => theme.fontSizes.text[size || 'm']};
  line-height: 150%;
`;
