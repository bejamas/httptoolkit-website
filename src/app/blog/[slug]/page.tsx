import { Container } from '@/components/elements/container';
import { Logo } from '@/components/elements/icon';
import { RelatedPosts } from '@/components/sections/blog/related-posts';
import { SinglePostHero } from '@/components/sections/blog/single-post-hero';
import { CTA } from '@/components/sections/cta';
import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx/blog';

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

type BlogPostPageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <Container>
      <SinglePostHero post={post} />
      <Container $size="content">{post.content}</Container>
      <CTA
        variant="cta-square"
        heading="Interested in OpenAPI?"
        excerpt="Try it out with HTTP Toolkit"
        icon={Logo}
        withDownload={false}
        cta={{
          title: 'Try it out',
          href: '/',
          $variant: 'primary',
        }}
      />
      <RelatedPosts tags={post.tags} currentPostSlug={post.slug} />
    </Container>
  );
}
