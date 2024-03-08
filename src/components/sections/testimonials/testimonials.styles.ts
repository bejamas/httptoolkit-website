'use client';

import { styled, keyframes } from '@/styles';

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
    min-width: 480px;
    text-wrap: wrap;
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
  columns: 4;
  gap: 16px;
  break-inside: avoid;
  max-height: 850px;
  overflow: visible;
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
`;

export const ScrollContent = styled.div`
  display: inline-flex;
  white-space: nowrap;
  animation: ${scrollAnimation} 15s linear infinite;
`;
