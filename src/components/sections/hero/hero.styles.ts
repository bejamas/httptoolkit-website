'use client';

import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { Text } from '@/components/elements/text';
import { styled } from '@/styles';

export const StyledHeroWrapper = styled.section`
  padding-top: 96px;
  padding-bottom: 64px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.hero};

  background:
    no-repeat url('/images/backgrounds/hero-lines.svg'),
    ${({ theme }) => theme.backgroundImages.backgroundDots};
  background-position: top -80px center;
`;

export const StyledHeading = styled(Heading)`
  max-width: 1100px;
  line-height: 115%;
  padding-top: 4px;
`;

export const StyledContainer = styled(Container)`
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 0;
  padding-right: 0;
`;

export const STyledSubHeading = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledExcerpt = styled(Text)`
  margin: 32px 0;
  max-width: 659px;
`;

export const StyledCTAWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;
  margin-top: 32px;
  margin-bottom: 66px;
`;
