import { StyledHeadingBlockWrapper, StyledHeadingBlockTitle } from './heading-block.styles';
import type { HeadingBlockProps } from './heading-block.types';

import { Badge } from '@/components/elements/badge';
import { Text } from '@/components/elements/text';

/**
 * @param title: This string can have text gradient on the segments that are between \`\*content\*\`
 */

export const HeadingBlock = ({
  $align = 'center',
  $centered = false,
  title,
  text,
  badgeTitle,
  badgeAdditionalText,
  badgeIcon,
}: HeadingBlockProps) => {
  const formattedTitle = title.split('`').map(segment => {
    const isGradient = segment.includes('*');
    if (!isGradient) {
      return segment;
    }
    return <span>{segment.replaceAll('*', '')}</span>;
  });

  return (
    <StyledHeadingBlockWrapper $align={$align} $centered={$centered}>
      {badgeTitle && (
        <Badge variant="secondary" additionalText={badgeAdditionalText} icon={badgeIcon}>
          {badgeTitle}
        </Badge>
      )}
      <StyledHeadingBlockTitle fontSize="l" textAlign={$align}>
        {...formattedTitle}
      </StyledHeadingBlockTitle>
      {text && (
        <Text fontSize="l" textAlign={$align}>
          {text}
        </Text>
      )}
    </StyledHeadingBlockWrapper>
  );
};
