import { StyledHeadingWrapper } from './overview-hero.styles';

import { Heading } from '@/components/elements/heading';
import { Text } from '@/components/elements/text';

export const OverviewHero = () => {
  return (
    <StyledHeadingWrapper>
      <Heading fontSize="l" color="textGradient">
        The HTTP Toolkit Blog
      </Heading>
      <Text fontSize="l">News, updates and advice on how to use your online HTTP Toolkit.</Text>
    </StyledHeadingWrapper>
  );
};
