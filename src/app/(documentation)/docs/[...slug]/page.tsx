import { DocumentationLayout } from '@/components/layout/documentation';
import { getAllDocsMeta, getDocBySlug } from '@/lib/mdx/docs';

export async function generateStaticParams() {
  const docs = await getAllDocsMeta();

  return docs.map(doc => ({
    slug: doc.parent ? [doc.parent, doc.slug] : [doc.slug],
  }));
}

type DocPageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params }: DocPageProps) {
  const { slug } = params;
  const realSlug = slug[slug.length - 1];
  const { title, content: Content } = await getDocBySlug(realSlug);

  return (
    <DocumentationLayout title={title} withoutNavigation>
      {Content}
    </DocumentationLayout>
  );
}
