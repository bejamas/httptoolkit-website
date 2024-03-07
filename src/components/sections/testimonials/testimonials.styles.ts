'use client';

import { styled } from '@/styles';

export const StyledTestimonialsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 96px 0;
  gap: 61px;
`;

export const StyledTestimonialCard = styled.article`
  background: ${({ theme }) => theme.colors.inkBlack};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.button.border};
  border-radius: 12px;
  padding: 32px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 36px;
  break-inside: avoid;
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    max-width: 480px;
  }
`;

export const StyledAuthorWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTestimonialGrid = styled.div`
  columns: 3;
  gap: 16px;
  break-inside: avoid;
`;
