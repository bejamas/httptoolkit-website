import { StyledTagsSection, StyledTagsWrapper } from './overview-tags.styled';

import { Container } from '@/components/elements/container';
import { Link } from '@/components/elements/link';
import { Text } from '@/components/elements/text';
import { getAllCategoryTags } from '@/lib/mdx/blog';

export const OverviewTags = async () => {
  const tags = await getAllCategoryTags();
  const visibleTags = tags.slice(0, 5);
  // const dropdownTags = tags.slice(5, tags.length);

  return (
    <StyledTagsSection>
      <Container>
        <StyledTagsWrapper>
          <Text fontSize="m">All posts</Text>
          {visibleTags.map(tag => (
            <Link href={`blog?tags=${tag}`}>
              <Text fontSize="m" key={tag}>
                {tag}
              </Text>
            </Link>
          ))}
          {/*
          {dropdownTags.map(tag => (
            <Text fontSize="m" key={tag}>
              {tag}
            </Text>
          ))} */}
        </StyledTagsWrapper>
      </Container>
    </StyledTagsSection>
  );
};
