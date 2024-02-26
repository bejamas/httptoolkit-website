export interface CardProps {
  title: string;
  text: string;
  darkImage: Image;
  lightImage?: Image;
}

export interface StyledCardImageWrapperProps {
  $backgroundDots: string;
  $backgroundGradient: string;
  $backgroundFuncGradient: string;
}
