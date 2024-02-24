'use client';

import type { InputBorderProps, InputProps } from './input.types';

import { styled } from '@/styles';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInputBorder = styled.span<InputBorderProps>`
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  padding: 1px;
  height: ${({ styledAs }) => (styledAs === 'textarea' ? '124px' : 'auto')};

  background: ${({ theme }) => theme.colors.borderGradient};

  &:hover {
    ${({ theme, hasError }) => !hasError && `background: ${theme.colors.blueGradient};`}
  }

  ${({ hasError, theme }) =>
    hasError &&
    `
      padding: 1px;
      background: ${theme.colors.orangeGradient}
    `}
`;

export const StyledInput = styled.input<InputProps>`
  padding: 14px 14px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.text.s};
  line-height: 150%;
  color: ${({ theme, hasError }) => (hasError ? theme.colors.text.cinnarbarRed : theme.colors.text.darkGrey)};
  outline: 0;
  width: 100%;
  height: ${({ as }) => (as === 'textarea' ? '100%' : '46px')};
  resize: none;

  border-radius: 6px;
  background-color: ${({ theme, hasError }) => (hasError ? theme.colors.inkBlack : theme.colors.darkGrey)};

  box-shadow:
    0px 1.5px 4px -1px rgba(10, 9, 11, 0.07),
    0px 3px 1px 0px rgba(24, 25, 28, 0.5) inset;

  &::placeholder {
    color: ${({ theme, hasError }) => (hasError ? theme.colors.text.cinnarbarRed : theme.colors.text.darkGrey)};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inkBlack};
  }
`;
