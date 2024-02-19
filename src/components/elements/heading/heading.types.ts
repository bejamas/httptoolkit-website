type headingSize = 'xs' | 's' | 'l' | 'm' | 'xl';
type headingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  size?: headingSize;
  as?: headingLevel;
}
