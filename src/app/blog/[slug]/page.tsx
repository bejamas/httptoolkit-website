import type { Metadata } from 'next/types';

import { Container } from '@/components/elements/container';
import { Logo } from '@/components/elements/icon';
import { RelatedPosts } from '@/components/sections/blog/related-posts';
import { SinglePostHero } from '@/components/sections/blog/single-post-hero';
import { ContentWithTable } from '@/components/sections/content-with-table';
import { CTA } from '@/components/sections/cta';
import { getPostBySlug, getAllPostsMeta } from '@/lib/mdx/blog';
import { siteMetadata } from '@/lib/site-metadata';
import { getBlogTitlesBySlug } from '@/lib/utils/get-titles-by-slug';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  const postImageMetadata = [`${siteMetadata.siteUrl}/images/${post.coverImage}`];

  return {
    title: post.title,
    openGraph: {
      images: postImageMetadata,
    },
    twitter: {
      title: post.title,
      images: postImageMetadata,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostsMeta();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  const postNavigation = await getBlogTitlesBySlug(`/src/content/posts/${slug}.mdx`);

  return (
    <>
      <Container>
        <SinglePostHero post={post} />
      </Container>

      <ContentWithTable $bgVariant="darkGrey" links={[postNavigation]} parsedContent={post.content} />

      <Container>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: [`${siteMetadata.siteUrl}/images/${post.coverImage}`],
            datePublished: new Date(post.date).toISOString(),
            dateModified: siteMetadata.latestSiteUpdate,
            author: [
              {
                '@type': 'Organization',
                name: 'HTTP Toolkit',
                url: 'https://httptoolkit.com/blog/',
                logo: 'https://httptoolkit.com/logo-square.png',
              },
              {
                '@type': 'Person',
                name: post.author?.name,
                url: post.author?.url,
              },
            ],
            publisher: {
              '@type': 'Organization',
              name: 'HTTP Toolkit',
              url: 'https://httptoolkit.com/blog/',
              logo: 'https://httptoolkit.com/logo-square.png',
            },
          }),
        }}
      />
    </>
  );
}
