import { Suspense } from 'react';

import { Container } from '@/components/elements/container';
import { OverviewBlogContent } from '@/components/sections/blog/overview-content';
import { OverviewHero } from '@/components/sections/blog/overview-hero';
import { getAllPostsMeta } from '@/lib/mdx';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  const featurePost = posts.find(post => post.isFeatured);

  return (
    <Container>
      {featurePost && <OverviewHero featuredPost={featurePost} />}
      <Suspense fallback="loading...">
        <OverviewBlogContent posts={posts} />
      </Suspense>
    </Container>
  );
}
