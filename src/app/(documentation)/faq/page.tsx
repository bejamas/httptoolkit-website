import { DocumentationLayout } from '@/components/layout/documentation';
import { getDocBySlug } from '@/lib/mdx/docs';
import { FAQ_SLUG } from '@/lib/mdx/utils/get-content-table-links';

export default async function Faq() {
  const { content: Content } = await getDocBySlug(FAQ_SLUG);
  return <DocumentationLayout title="FAQ">{Content}</DocumentationLayout>;
}
