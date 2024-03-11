import Link from 'next/link';

import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { Book } from '@/components/elements/icon';
import { OverviewHero } from '@/components/sections/blog/overview-hero';
import { getAllPostsMeta } from '@/lib/mdx';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  const featurePost = posts.find(post => post.isFeatured);

  return (
    <Container>
      <OverviewHero featuredPost={featurePost} />
      {posts?.map((post, i) => (
        <Link
          key={i}
          href={`/blog/${post.slug}`}
          style={{ marginBottom: 10, display: 'block', textDecoration: 'none' }}
        >
          <Heading as="h3" fontSize="xs" key={post.slug}>
            {/* TODO: Remove ban-ts-comment once work on blog post tasks */}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Book /> {i + 1}. {post.title}
          </Heading>
        </Link>
      ))}
    </Container>
  );
}
