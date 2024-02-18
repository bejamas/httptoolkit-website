import Link from 'next/link';

import { getAllPostsMeta } from '@/lib/mdx';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  return (
    <section>
      <div className="flex gap-6 mt-6">
        {posts?.map((post, i) => (
          <Link href={`/blog/${post.slug}`}>
            <h3 key={post.slug} className="text-xl font-semibold">
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              {i}. {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
