'use client';

import { useState } from 'react';

import { MasonryGrid } from './masonry-grid';
import { StyledPostGridSection, StyledSubscriberBox } from './overview-post-grid.styles';

import { Button } from '@/components/elements/button';
import Stack from '@/components/elements/stack';
import { BlogCard } from '@/components/modules/blog-card';

export const OverviewPostGrid = ({ posts }: { posts: Post[] }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <StyledPostGridSection>
      <StyledSubscriberBox>HTTP Toolkit Newsletter</StyledSubscriberBox>
      <Stack $gapxl="48px">
        <MasonryGrid>
          {posts.slice(0, visibleItems).map(post => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              image={{ src: `/images/${post.coverImage}`, alt: post.title }}
              date={post.date}
              tag={post.tags[0]}
              // TODO(gerald): Replace with the excerpt when working on blog post content
              text="Sometimes things crash when they're running inside a Docker container though, and then all of a sudden it can get much more difficult to work out why, or what the hell to do next."
            />
          ))}
        </MasonryGrid>
        {visibleItems < posts.length && (
          <Button $variant="secondary" $small onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </Stack>
    </StyledPostGridSection>
  );
};
