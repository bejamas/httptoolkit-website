import { StyledCardImage, StyledCardImageWrapper, StyledCardTextWrapper, StyledCardWrapper } from './card.styles';
import type { CardProps } from './card.types';

import { Heading } from '@/components/elements/heading';
import { Text } from '@/components/elements/text';
import DarkDots from '@/images/backgrounds/dark/dots_dark.svg';
import DarkFuncGradient from '@/images/backgrounds/dark/func_gradient_dark.png';
import DarkGradient from '@/images/backgrounds/dark/gradient_dark.png';
import LightDots from '@/images/backgrounds/light/dots-light.svg';
import LightFuncGradient from '@/images/backgrounds/light/func-gradient-light.png';
import LightGradient from '@/images/backgrounds/light/gradient-light.png';

export const Card = ({ title, text, darkImage: image }: CardProps) => {
  const colorsScheme: 'dark' | 'light' = 'dark';
  return (
    <StyledCardWrapper>
      <StyledCardImageWrapper
        $backgroundDots={colorsScheme === 'dark' ? DarkDots.src : LightDots.src}
        $backgroundFuncGradient={colorsScheme === 'dark' ? DarkFuncGradient.src : LightFuncGradient.src}
        $backgroundGradient={colorsScheme === 'dark' ? DarkGradient.src : LightGradient.src}
      >
        <StyledCardImage src={image.src} alt={image.alt} />
      </StyledCardImageWrapper>
      <StyledCardTextWrapper>
        <Heading textAlign="center" fontSize="m" color="lightGrey">
          {title}
        </Heading>
        <Text fontSize="m" textAlign="center" color="darkGrey">
          {text}
        </Text>
      </StyledCardTextWrapper>
    </StyledCardWrapper>
  );
};
