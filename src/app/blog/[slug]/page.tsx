import { Container } from '@/components/elements/container';
import { Text } from '@/components/elements/text';
import { RelatedPosts } from '@/components/sections/blog/related-posts';
import { SinglePostHero } from '@/components/sections/blog/single-post-hero';
import { getPostBySlug, getAllPostsMeta, getAllCategoryTags } from '@/lib/mdx/blog';

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
  const tags = await getAllCategoryTags();

  return (
    <Container>
      <SinglePostHero post={post} />

      {tags.length && tags.map(tag => <Text key={tag}>{tag}</Text>)}

      <RelatedPosts tags={post.tags} currentPostSlug={post.slug} />
      {/* <div>{post.content}</div> */}
    </Container>
  );
}
