type textSize = 's' | 'm' | 'l' | 'xl' | 'xll';

export interface TextProps {
  size?: textSize;
  as?: "span" | "p"
}
