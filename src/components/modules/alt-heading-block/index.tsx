import {
  StyledAltHeadingBlockSubtitle,
  StyledAltHeadingBlockTitle,
  StyledAltHeadingBlockWrapper,
} from './alt-heading-block.styles';
import type { AltHeadingBlockProps } from './alt-heading-block.types';

import type { HeadingProps } from '@/components/elements/heading/heading.types';

/**
 * @param title: This string can have highlighted text on the segments that are between \`\*content\*\`
 */
export const AltHeadingBlock = ({ title, subtitle, mediumHeading = false }: AltHeadingBlockProps) => {
  const headingSize: HeadingProps['fontSize'] = mediumHeading ? 'm' : 'l';
  const formattedTitle = title.split('`').map(segment => {
    const isHighlighted = segment.includes('*');
    if (!isHighlighted) {
      return segment;
    }
    return <span>{segment.replaceAll('*', '')}</span>;
  });

  return (
    <StyledAltHeadingBlockWrapper>
      {subtitle && <StyledAltHeadingBlockSubtitle>{subtitle}</StyledAltHeadingBlockSubtitle>}
      <StyledAltHeadingBlockTitle forwardedAs="h2" fontSize={headingSize} color="textGradient" textAlign="center">
        {formattedTitle}
      </StyledAltHeadingBlockTitle>
    </StyledAltHeadingBlockWrapper>
  );
};
