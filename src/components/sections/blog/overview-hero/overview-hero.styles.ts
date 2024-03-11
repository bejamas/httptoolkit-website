'use client';

import { screens, styled } from '@/styles';

export const StyledHeadingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64px;
  margin-bottom: 48px;
  text-align: center;

  @media (min-width: ${screens['lg']}) {
    text-align: start;
  }
`;

export const StyledFeaturePost = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  border-radius: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.inkBlack};
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.button.border},
    0 0 8px 0 ${({ theme }) => theme.colors.shadowDefault};
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.screens['lg']}) {
    padding: 32px;
  }
`;
