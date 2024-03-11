type Component<T = unknown> = T & {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

interface Image {
  src: string;
  alt?: string;
}
