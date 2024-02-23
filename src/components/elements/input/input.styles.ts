'use client';

import type { InputProps } from './input.types';

import { styled } from '@/styles';
import { adjustOpacity } from '@/styles/helpers/adjust-opacity';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInputBorder = styled.span<InputProps>`
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    padding: 1px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.blueGradient});
  }

  ${({ hasError, theme }) => {
    const gradientValues = theme.colors.orangeGradient.split(', ');
    return (
      hasError &&
      `
      padding: 1px;
      background: linear-gradient(345.32deg, ${gradientValues[0]} 10.67%, ${gradientValues[1]} 89.91%);
    `
    );
  }}
`;

export const StyledInput = styled.input<InputProps>`
  padding: 14px 14px;
  font-size: ${({ theme }) => theme.fontSizes.text.s};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.darkGrey};
  outline: 0;
  width: 100%;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => adjustOpacity(theme.colors.white, 0.14)};

  background-color: ${({ theme }) => theme.colors.darkGrey};

  box-shadow:
    0px 1.5px 4px -1px rgba(10, 9, 11, 0.07),
    0px 3px 1px 0px rgba(24, 25, 28, 0.5) inset;

  &:hover {
    border: none;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inkBlack};
  }
`;
