'use client';

import { styled } from '@/styles';

export const StyledImageWrapper = styled.div`
  position: relative;
  width: fit-content;
  object-fit: cover;
  overflow: hidden;
  line-height: 0;

  & img {
    object-fit: cover;
    width: 100%;
    height: fit-content;
  }
`;
