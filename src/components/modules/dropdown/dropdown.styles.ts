'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import type { DropdownOptionProps, DropdownProps } from './dropdown.types';

import { Link } from '@/components/elements/link';
import { css, screens, styled } from '@/styles';

export const DropdownOptionsWrapper = styled(DropdownMenu.DropdownMenuContent)<{ $variant?: 'primary' | 'secondary' }>`
  display: grid;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.inkBlack};
  padding: 4px;
  gap: 4px;
  /* width: ; */
  width: ${({ $variant }) => ($variant === 'primary' ? css`calc(100% + 2rem)` : '100%')};
  /* max-height: 0; */
  transition: all 0.5s linear;
  overflow: hidden;
  z-index: 33;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.button.border};
`;

export const DropdownWrapper = styled.div<Pick<DropdownProps, '$variant'>>`
  position: relative;
  width: 100%;
  border-radius: 12px;
  justify-content: center;

  @media (min-width: ${screens['lg']}) {
    justify-content: start;
    width: fit-content;
  }
`;

const baseOption = css`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.text.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  outline: transparent;
  cursor: pointer;

  @media (min-width: ${screens['lg']}) {
    text-align: left;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const LinkDropdownOption = styled(Link)<DropdownOptionProps>`
  /* ${baseOption} */
`;

export const DropdownOption = styled.button<DropdownOptionProps>`
  /* ${baseOption} */
`;

export const DropdownOptionWrapper = styled(DropdownMenu.Item)`
  ${baseOption}
`;
