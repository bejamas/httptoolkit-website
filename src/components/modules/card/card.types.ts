export interface CardProps {
  title: string;
  text: string;
  darkImage: Image;
  lightImage?: Image;
  colorScheme?: 'dark' | 'light';
}

export interface StyledCardImageWrapperProps {
  $backgroundDots: string;
  $backgroundGradient: string;
  $backgroundFuncGradient: string;
}
