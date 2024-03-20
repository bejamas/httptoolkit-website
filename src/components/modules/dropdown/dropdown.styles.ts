'use client';

import * as HoverCard from '@radix-ui/react-hover-card';

import type { DropdownOptionProps, DropdownProps } from './dropdown.types';

import { Link } from '@/components/elements/link';
import { css, screens, styled } from '@/styles';

export const DropdownHoverTrigger = styled.div`
  position: relative;
`;

export const DropdownOptionsWrapper = styled.div<Pick<DropdownProps, '$direction' | '$variant' | '$withBorder'>>`
  display: grid;
  top: ${({ $direction }) => ($direction === 'bottom' ? 'calc(100% + 4px)' : 'auto')};
  bottom: ${({ $direction }) => ($direction === 'top' ? 'calc(100% + 4px)' : 'auto')};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.inkBlack};
  padding: 4px;
  gap: 4px;

  ${({ $variant, $withBorder }) => {
    switch ($variant) {
      case 'primary':
        return css`
          width: calc(100% + ${$withBorder ? '2rem' : '1rem'});
        `;
      case 'secondary':
        return css`
        width:   width: calc(100% + 1rem);
      `;
      default:
        return css`
          width: calc(100% + 1rem);
        `;
    }
  }};

  max-height: fit-content;
  z-index: 33;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.button.border};
`;

export const DropdownWrapper = styled(HoverCard.Root)<Pick<DropdownProps, '$variant'>>`
  position: relative;
  width: 100%;
  border-radius: 12px;
  justify-content: center;

  @media (min-width: ${screens['lg']}) {
    justify-content: start;
    width: fit-content;
  }
`;

const baseOption = css<DropdownOptionProps>`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.text.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: 1;
  text-align: center;
  text-decoration: none;
  outline: none;
  transition: all 0.3s linear;

  @media (min-width: ${screens['lg']}) {
    text-align: left;
  }

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const LinkDropdownOption = styled(Link)<DropdownOptionProps>`
  ${baseOption}
`;

export const DropdownOption = styled.button<DropdownOptionProps>`
  ${baseOption}
`;

export const HoverCardContent = styled(HoverCard.Content)`
  animation-duration: 400ms;
`;
