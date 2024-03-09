import {
  StyledBentoColumn,
  StyledBentoContent,
  StyledBentoGradientWrapper,
  StyledBentoTitle,
  StyledBentoWrapper,
} from './bento.styles';
import type { BentoProps } from './bento.types';

import { Container } from '@/components/elements/container';
import { Gradient } from '@/components/elements/gradient';
import { FluidCard } from '@/components/modules/fluid-card';

export const Bento = ({ title, cards }: BentoProps) => {
  return (
    <StyledBentoWrapper>
      <StyledBentoGradientWrapper>
        <Gradient />
      </StyledBentoGradientWrapper>
      <Container>
        <StyledBentoTitle forwardedAs="h2" fontSize="m" color="textGradient" textAlign="center">
          {title}
        </StyledBentoTitle>
        <StyledBentoContent>
          <StyledBentoColumn>
            <FluidCard $variant="dark" {...cards[0]} />
            <FluidCard $variant="dark" {...cards[1]} />
          </StyledBentoColumn>
          <StyledBentoColumn>
            <FluidCard $variant="dark" {...cards[2]} />
            <FluidCard $variant="dark" {...cards[3]} />
          </StyledBentoColumn>
          <StyledBentoColumn>
            <FluidCard $variant="dark" {...cards[4]} />
            <FluidCard $variant="dark" {...cards[5]} />
          </StyledBentoColumn>
        </StyledBentoContent>
      </Container>
    </StyledBentoWrapper>
  );
};
