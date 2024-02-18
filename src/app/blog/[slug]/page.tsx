import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx';

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
    <section>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <div className="flex gap-6 mt-6">{post.meta.title}</div>
    </section>
  );
}
