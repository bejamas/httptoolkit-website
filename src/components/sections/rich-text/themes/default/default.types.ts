export interface SpacingShape {
  mobile?: string;
  desktop: string;
}

export interface StyledSpacerProps {
  $spacing?: 'policies' | 'docs' | 'simple' | 'normal';
}
