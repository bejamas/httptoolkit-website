import type { Metadata } from 'next/types';

import { DocumentationLayout } from '@/components/layout/documentation';
import { ROOT_DOCS_DIRECTORY, getAllDocsMeta, getDocBySlug } from '@/lib/mdx/docs';
import { optimizeExerptToMetaDescription } from '@/lib/utils';
import { findFile } from '@/lib/utils/find-file';
import { getHeadingLinks } from '@/lib/utils/get-heading-links';

type DocPageProps = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const slug = params.slug;
  const realSlug = slug[slug.length - 1];
  const doc = await getDocBySlug(realSlug);

  const metaDescription = doc.excerpt ? { description: optimizeExerptToMetaDescription(doc.excerpt) } : null;

  return {
    title: doc.title,
    ...metaDescription,
    openGraph: {
      title: doc.title,
      ...metaDescription,
    },
    twitter: {
      title: doc.title,
      ...metaDescription,
    },
  };
}

export async function generateStaticParams() {
  const docs = await getAllDocsMeta();

  return docs.map(doc => ({
    slug: doc.parent ? [doc.parent, doc.slug] : [doc.slug],
  }));
}

export default async function DocsPage({ params }: DocPageProps) {
  const { slug } = params;
  const realSlug = slug[slug.length - 1];
  const { title, content: Content } = await getDocBySlug(realSlug);
  const [filePath] = findFile(ROOT_DOCS_DIRECTORY, realSlug, '.mdx', true);
  const links = await getHeadingLinks(filePath);

  return (
    <DocumentationLayout title={title} links={links}>
      {Content}
    </DocumentationLayout>
  );
}
