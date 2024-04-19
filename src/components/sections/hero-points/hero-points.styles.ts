'use client';

import { styled } from '@/styles';

export const StyledHeroPointsWrapper = styled.div`
  background-image: ${({ theme }) => theme.backgroundImages.backgroundDots};
  background-size: 450px;
  background-repeat: repeat;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

export const StyledHeroPointsContent = styled.div`
  margin-top: 24px;
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  color: ${({ theme }) => theme.colors.text.darkGrey};
  line-height: 1.5;

  & strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
