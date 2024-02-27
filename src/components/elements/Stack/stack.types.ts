export interface StyledStackProps {
  $direction?: 'row' | 'row-reverse' | 'column' | ' column-reverse';
  $gap?: string;
}

export type StackProps = Component<StyledStackProps>;
