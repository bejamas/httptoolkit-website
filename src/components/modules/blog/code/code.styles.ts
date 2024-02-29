'use client';

import { styled } from '@/styles';

export const StyledBlogCodeWrapper = styled.div`
  border-radius: 16px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.button.border};
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  overflow: hidden;
`;

export const StyledBlogCodeTitleWrapper = styled.div`
  padding: 16px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.button.border};
`;

export const StyledBlogCodeContent = styled.code`
  display: block;
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 13px;
  line-height: 19.5px;
  font-family: var(--font-code);
  white-space: pre-wrap;
`;
