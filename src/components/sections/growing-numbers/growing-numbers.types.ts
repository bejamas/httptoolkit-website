interface GrowingNumbersStat {
  title: string;
  number: number;
  isOver?: boolean;
}

export interface GrowingNumbersProps {
  title: string;
  text: string;
  stats: GrowingNumbersStat[];
}
