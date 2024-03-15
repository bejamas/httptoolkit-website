import {
  StyledExplorerContainer,
  StyledExplorerSection,
  StyledSearchWrapper,
  StyledTagText,
  StyledTagsWrapper,
} from './overview-explorer.styled';
import { TagsDropwdown } from './tags-dropwdown';

import { Link } from '@/components/elements/link';
import { getAllCategoryTags } from '@/lib/mdx/blog';

export const OverviewExplorer = async () => {
  const tags = await getAllCategoryTags();
  // TODO: replace with choosen featured categories later
  const featuredTags = tags.slice(0, 5);
  const ramainingTags = tags.slice(5, tags.length);

  return (
    <StyledExplorerSection>
      <StyledExplorerContainer>
        <StyledTagsWrapper aria-label="Blog post tags">
          <ul>
            <li>
              <Link href={`/blog`}>
                <StyledTagText>All posts</StyledTagText>
              </Link>
            </li>
            {featuredTags.map(tag => (
              <li key={tag}>
                <Link href={`/blog?tags=${tag}`}>
                  <StyledTagText>{tag}</StyledTagText>
                </Link>
              </li>
            ))}
            <li>
              <TagsDropwdown tags={ramainingTags} />
            </li>
          </ul>
        </StyledTagsWrapper>
        <StyledSearchWrapper>Search box</StyledSearchWrapper>
      </StyledExplorerContainer>
    </StyledExplorerSection>
  );
};
