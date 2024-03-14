'use client';

import { useState } from 'react';
import { Masonry } from 'react-plock';

import { StyledBlogOverviewSection, StyledLoadMoreWrapper, StyledSubscriberBox } from './overview-content.styles';

import { Button } from '@/components/elements/button';
import Stack from '@/components/elements/stack';
import { BlogCard } from '@/components/modules/blog-card';

export const OverviewBlogContent = ({ posts }: { posts: Post[] }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <StyledBlogOverviewSection>
      <StyledSubscriberBox>HTTP Toolkit Newsletter</StyledSubscriberBox>
      <Stack $gap="24px" $gapxl="64px">
        <Masonry
          items={posts.slice(0, visibleItems)}
          config={{
            columns: [1, 2, 2],
            gap: [24, 24, 24],
            media: [640, 1024, 1440],
          }}
          render={post => (
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
          )}
        />
        {visibleItems < posts.length && (
          <StyledLoadMoreWrapper>
            <Button $variant="secondary" onClick={handleLoadMore}>
              Load More
            </Button>
          </StyledLoadMoreWrapper>
        )}
      </Stack>
    </StyledBlogOverviewSection>
  );
};
