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

//TODO: Remove isLight when have useTheme hook

export const Card = ({ title, text, darkImage, lightImage, colorScheme = 'dark' }: CardProps) => {
  const isDark = colorScheme === 'dark';

  const Dots = isDark ? DarkDots.src : LightDots.src;
  const Gradient = isDark ? DarkGradient.src : LightGradient.src;
  const FuncGradient = isDark ? DarkFuncGradient.src : LightFuncGradient.src;
  {
    /* TODO: Possible to handle with <picture> and prefers-color-scheme */
  }
  const image = isDark ? darkImage : lightImage || darkImage;

  return (
    <StyledCardWrapper>
      <StyledCardImageWrapper
        $backgroundDots={Dots}
        $backgroundFuncGradient={FuncGradient}
        $backgroundGradient={Gradient}
      >
        <StyledCardImage src={image.src} alt={image.alt} />
      </StyledCardImageWrapper>
      <StyledCardTextWrapper>
        <Heading textAlign="center" fontSize="m" color="lightGrey" as="h3">
          {title}
        </Heading>
        <Text fontSize="m" textAlign="center" color="darkGrey">
          {text}
        </Text>
      </StyledCardTextWrapper>
    </StyledCardWrapper>
  );
};
