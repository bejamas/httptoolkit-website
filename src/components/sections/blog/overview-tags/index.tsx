import { StyledTagText, StyledTagsSection, StyledTagsWrapper } from './overview-tags.styled';

import { Container } from '@/components/elements/container';
import { Link } from '@/components/elements/link';
import { getAllCategoryTags } from '@/lib/mdx/blog';

export const OverviewTags = async () => {
  const tags = await getAllCategoryTags();
  const visibleTags = tags.slice(0, 5);
  // const dropdownTags = tags.slice(5, tags.length);

  return (
    <StyledTagsSection>
      <Container>
        <StyledTagsWrapper>
          <Link href={`/blog`}>
            <StyledTagText>All posts</StyledTagText>
          </Link>
          {visibleTags.map(tag => (
            <Link href={`/blog?tags=${tag}`}>
              <StyledTagText key={tag}>{tag}</StyledTagText>
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
