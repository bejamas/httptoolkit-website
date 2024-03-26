'use client';

import { MovingBorder } from '../moving-border';
import type { MovingBorderProps } from '../moving-border/moving-border.types';

import { screens, styled } from '@/styles';

export const StyledThemedImage = styled.div`
  & img {
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
  }
`;

export const ThemedImageMovingBorder = styled(MovingBorder)<MovingBorderProps>`
  --border-width: 2px;
  --radius: 8px;
  line-height: 0;
  width: 100%;
  height: fit-content;
  object-fit: cover;

  @media (min-width: ${screens['lg']}) {
    --radius: 16px;
  }

  ${({ theme, $withBorder }) =>
    $withBorder &&
    `
    border: var(--border-width) solid ${theme.colors.button.border};

    &::before {
      content: none;
    }
  `}

  &:hover {
    border: var(--border-width) solid
      ${({ $withBorder, theme }) => (!$withBorder ? 'transparent' : theme.colors.button.border)};
  }

  & img {
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    border: 1px solid linear-gradient(270deg, #ffffff -0.8%, rgba(255, 255, 255, 0) 93.82%);

    @media (min-width: ${screens['lg']}) {
      padding: 10px;
      border-radius: 22px;
    }
  }

  &:before {
    background-image: conic-gradient(from var(--angle), var(--moving-border-dark));
    animation: spin 5s linear infinite paused;
    animation-play-state: running;
  }

  @supports not (background: paint(something)) {
    &::before {
      background-image: conic-gradient(from var(--angle), var(--moving-border-dark));
    }
  }
`;
