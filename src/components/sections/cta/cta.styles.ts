'use client';

import type { CTAVariant } from './cta.types';

import { Container } from '@/components/elements/container';
import { StyledHeading } from '@/components/elements/heading/heading.styles';
import { StyledStack } from '@/components/elements/stack/stack.styles';
import { Text } from '@/components/elements/text';
import { StyledText } from '@/components/elements/text/text.styles';
import { styled, css, screens } from '@/styles';

const ctaSquareStyles = css`
  max-width: 1344px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: 16px;
  overflow: hidden;
  margin: 96px auto;
  padding-top: 64px;
  padding-bottom: 64px;
  box-shadow: 0px 0px 24px 0px rgba(189, 195, 218, 0.1) inset;
  background:
    no-repeat url('/images/backgrounds/hero-lines.svg'),
    ${({ theme }) => theme.backgroundImages.backgroundDots};
  background-position: top -80px center;

  @media (min-width: ${screens['lg']}) {
    padding-top: 128px;
    padding-bottom: 128px;
  }

  /* faded look effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(ellipse at center, transparent 30%, ${({ theme }) => theme.colors.inkBlack});
  }
`;

const ctaStyles = css`
  background: no-repeat url('/images/backgrounds/hero-lines.svg');
  background-position: top -80px center;
`;

const ctaHeroStyles = css`
  box-shadow: ${({ theme }) => theme.shadow.hero};
  background:
    no-repeat url('/images/backgrounds/hero-lines.svg'),
    ${({ theme }) => theme.backgroundImages.backgroundDots};
  background-position: top -80px center;
  /* faded look effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: radial-gradient(ellipse at center, transparent 60%, ${({ theme }) => theme.colors.inkBlack});
  }
`;

export const StyledHeroWrapper = styled.section<{ $variant: CTAVariant }>`
  position: relative;
  padding-top: 32px;
  padding-bottom: 64px;
  text-align: center;

  ${({ $variant }) => $variant === 'cta-square' && ctaSquareStyles};
  ${({ $variant }) => $variant === 'cta-hero' && ctaHeroStyles};
  ${({ $variant }) => $variant === 'cta-fluid' && ctaStyles};

  @media (min-width: ${screens['lg']}) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

export const StyledContainer = styled(Container)`
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${screens['lg']}) {
    padding-left: 0;
    padding-right: 0;
  }

  & ${StyledHeading} {
    max-width: 360px;
    line-height: 115%;
    padding-top: 4px;

    @media (min-width: ${screens['md']}) {
      max-width: 1100px;
    }
  }

  & ${StyledText} {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  & ${StyledStack} {
    align-items: center;
  }
`;

export const STyledSubHeading = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledExcerpt = styled(Text)<{ $isLargeText?: boolean }>`
  ${({ $isLargeText }) =>
    $isLargeText &&
    css`
      max-width: 343px;

      @media (min-width: ${screens['lg']}) {
        max-width: 659px;
      }
    `};
`;

export const StyledCTAWrapper = styled.div<{ $isLargeText: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${screens['lg']}) {
    flex-direction: row;
  }

  ${({ $isLargeText }) =>
    !$isLargeText &&
    css`
      margin-top: 16px;
    `};
`;
