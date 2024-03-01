'use client';

import { styled } from '@/styles';

export const StyledGrowingNumbersWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 96px 48px;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    padding: 16px 0;

    & > *:first-child {
      margin: 0 auto;
      align-items: center;
    }

    & * {
      text-align: center;
    }
  }
`;

export const StyledGrowingNumbersStatsWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(2, 248px);
    grid-template-rows: repeat(2, 1fr);
    gap: 80px 96px;
  }

  @media (min-width: ${({ theme }) => theme.screens['2xl']}) {
    padding-right: 28px;
  }
`;

export const StyledGrowingNumbersStat = styled.div``;

export const StyledGrowingNumberStatNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.heading.mobile.xl};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  line-height: 1.1;
  margin-bottom: 8px;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.heading.desktop.xl};
  }
`;
