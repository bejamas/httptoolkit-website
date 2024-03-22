'use client';

import type { ImageProps } from '.';

import { css, styled } from '@/styles';

export const StyledImageWrapper = styled.div<Partial<ImageProps>>`
  position: relative;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  line-height: 0;

  & img {
    object-fit: cover;
    width: 100%;
  }

  ${({ $forRichText }) =>
    $forRichText &&
    css`
      display: flex;
      justify-content: center;

      & img {
        position: relative !important;
        width: unset !important;
        height: unset !important;
        margin: 48px auto;
      }
    `}
`;
