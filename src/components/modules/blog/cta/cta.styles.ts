'use client';

import { styled } from '@/styles';

export const StyledBlogCTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inkBlack};
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
  box-shadow:
    0px 0px 24px 0px rgba(128, 130, 137, 0.1) inset,
    0 0 0 1px ${({ theme }) => theme.colors.button.border};

  background-image: url('/dots_dark.svg'), url('/gradient-dark.png');
  background-size:
    400px 400px,
    1591px 1016px;
  background-repeat: repeat, no-repeat;
  background-position:
    center,
    top 10% center;

  & * {
    text-align: center;
  }

  @media (prefers-color-scheme: light) {
    background-image: url('/dots-light.svg'), url('/gradient-light.png');
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    gap: 24px;
    padding: 32px;
    align-items: initial;
    & * {
      text-align: inherit;
    }
  }
`;

export const StyledBlogCTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.label.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.6;
  color: ${({ theme }) => theme.colors.text.darkGrey};
  text-transform: uppercase;
`;
