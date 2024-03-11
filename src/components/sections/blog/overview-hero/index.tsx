import { StyledFeaturePost, StyledHeadingWrapper } from './overview-hero.styles';

import { Badge } from '@/components/elements/badge';
import { Heading } from '@/components/elements/heading';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';

interface OverviewHeroProps {
  featuredPost?: Post;
}

export const OverviewHero = ({ featuredPost }: OverviewHeroProps) => {
  console.log('featuredPost', featuredPost);
  return (
    <>
      <StyledHeadingWrapper>
        <Heading fontSize="l" color="textGradient">
          The HTTP Toolkit Blog
        </Heading>
        <Text fontSize="l">News, updates and advice on how to use your online HTTP Toolkit.</Text>
      </StyledHeadingWrapper>

      {featuredPost && (
        <StyledFeaturePost>
          <Stack $direction="row">
            {featuredPost.tags.length && featuredPost.tags.map((tag: string) => <Badge>{tag}</Badge>)}
          </Stack>
          <Heading fontSize="m" as="h3">
            {featuredPost.title}
          </Heading>
        </StyledFeaturePost>
      )}
    </>
  );
};
