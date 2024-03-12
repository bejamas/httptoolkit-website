import { StyledPostGrid } from './overview-post-grid.styles';

import { BlogCard } from '@/components/modules/blog-card';

export const OverviewPostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <StyledPostGrid>
      {posts?.map(post => (
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
    </StyledPostGrid>
  );
};
