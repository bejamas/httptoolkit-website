'use client';

import { styled } from '@/styles';

export const StyledTagsSection = styled.section`
  padding: 34px 0;
  margin-bottom: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGradient};
`;

export const StyledTagsWrapper = styled.div`
  display: inline-flex;
  gap: 48px;
`;
