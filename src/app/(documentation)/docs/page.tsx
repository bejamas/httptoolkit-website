import { DocumentationLayout } from '@/components/layout/documentation';
import { getDocBySlug, ROOT_DOC_SLUG } from '@/lib/mdx/docs';

// TODO: remove when we can do the redirect at production level
export default async function DocsPage() {
  const { title, content: Content } = await getDocBySlug(ROOT_DOC_SLUG);

  return (
    <DocumentationLayout title={title} withoutNavigation>
      {Content}
    </DocumentationLayout>
  );
}
