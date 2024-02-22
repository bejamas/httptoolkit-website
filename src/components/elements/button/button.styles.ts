'use client';

import type { ButtonProps } from './button.types';

import { css, styled } from '@/styles';

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  z-index: 1;

  font-size: ${({ theme, small }) => theme.fontSizes.button[small ? 'small' : 'default']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  padding: ${small => (small ? '20px 24px' : '16px 24px')};

  border-radius: 12px;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          color: ${({ theme }) => theme.colors.text.alwayWhite};
          background: linear-gradient(${({ theme }) => theme.colors.orangeGradient});

          border: 1px solid ${({ theme }) => theme.colors.cinnarbarRed};

          box-shadow:
            0px 2px 1px 0px rgba(255, 255, 255, 0.15) inset,
            0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset;

          &:hover {
            border: 1px solid ${({ theme }) => theme.colors.text.white};
          }

          &:focus {
            box-shadow:
              0px 2px 1px 0px rgba(255, 255, 255, 0.15) inset,
              0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset,
              0px 0px 0px 8px rgba(50, 52, 59, 0.6);
          }

          &:active {
            box-shadow:
              0px 2px 1px 0px rgba(255, 255, 255, 0.15) inset,
              0px 4px 24px 0px rgba(245, 109, 79, 0.15),
              0px -2px 2px 0px rgba(0, 0, 0, 0.05) inset;
          }
        `;
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.colors.text.lightGrey};
          background-color: ${({ theme }) => theme.colors.inkBlack};

          border: 1px solid transparent;

          box-shadow: 0px 0px 8px 0px rgba(230, 232, 242, 0.05);

          &:hover {
            border: 1px solid ${({ theme }) => theme.colors.text.lightGrey};
          }

          &:focus {
            box-shadow:
              0px 0px 8px 0px rgba(230, 232, 242, 0.05),
              0px 0px 0px 8px rgba(50, 52, 59, 0.6);
          }

          &:active {
            box-shadow: 0px 0px 8px 0px rgba(230, 232, 242, 0.05);
          }
        `;
    }
  }}
`;

export const StyledButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;

  padding: 8px;
  border-radius: 12px;
  box-shadow: inset 0px 0px 0px 10px ${({ theme }) => theme.colors.mediumGrey};

  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.mediumGrey};
    top: 1px;
    right: 1px;
    margin: auto;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 12px;
  }
`;
