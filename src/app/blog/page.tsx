import { Container } from '@/components/elements/container';
import { OverviewHero } from '@/components/sections/blog/overview-hero';
import { OverviewPostGrid } from '@/components/sections/blog/overview-post-grid';
import { getAllPostsMeta } from '@/lib/mdx';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  const featurePost = posts.find(post => post.isFeatured);

  return (
    <Container>
      {featurePost && <OverviewHero featuredPost={featurePost} />}
      <OverviewPostGrid posts={posts} />
    </Container>
  );
}
