'use client';

import { css, styled } from '@/styles';

const openDropdown = css`
  padding: 4px;
  max-height: 300px;
`;

export const DropdownOptionsWrapper = styled.div`
  display: grid;
  position: absolute;
  top: calc(100% + 4px);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.inkBlack};
  padding: 0 4px;
  gap: 4px;
  min-width: 100%;
  max-height: 0;
  transition: all 0.5s linear;
  overflow: hidden;

  &:hover {
    ${openDropdown}
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  box-shadow: 0px 0px 8px 0px #e6e8f20d;
  width: fit-content;

  &:hover ${DropdownOptionsWrapper} {
    ${openDropdown}
  }
`;

export const DropdownOption = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.text.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: 1;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
