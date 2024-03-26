import fs from 'fs';
import path from 'path';

import type { MDXComponents } from 'mdx/types';
import { compileMDX } from 'next-mdx-remote/rsc';

import { defaultComponents, docsComponents } from '@/components/sections/rich-text/components';
import { findFile } from '@/lib/utils/find-file';
import { getAllFiles } from '@/lib/utils/get-all-files';
import type { UnorganizedDoc } from '@/lib/utils/get-content-table-links';

export const ROOT_DOCS_DIRECTORY = path.join(process.cwd(), 'src', 'content', 'docs');
export const ROOT_DOC_SLUG = 'getting-started';

const markdowRegex = /\.(md|mdx)$/;

function isMarkdown(str: string) {
  return markdowRegex.test(str);
}

export const getDocBySlug = async (slug: string, extension = '.mdx'): Promise<Doc> => {
  const realSlug = slug.replace(markdowRegex, '');
  const [filePath, relativePath] = findFile(ROOT_DOCS_DIRECTORY, realSlug, extension);

  if (!filePath) throw new Error('Document not found');

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX<Doc>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: { ...defaultComponents, ...docsComponents } as MDXComponents,
  });

  const splittedRelative = relativePath.split('/');
  const parent = Array.isArray(splittedRelative) && splittedRelative.length === 2 ? splittedRelative[0] : undefined;

  const doc: DocFrontmatter = {
    parent,
    slug: realSlug,
    title: frontmatter?.title ?? '',
    name: frontmatter?.name ?? '',
    order: frontmatter?.order ?? 0,
    content,
  };

  return doc;
};

export const getAllDocsMeta = async () => {
  const files = getAllFiles(ROOT_DOCS_DIRECTORY, '.mdx');
  const docs = [];

  for (const file of files) {
    try {
      if (isMarkdown(file)) {
        const post = await getDocBySlug(file);
        delete post.content;
        docs.push(post as unknown as UnorganizedDoc);
      }
    } catch (error) {
      // console.error('*_________START___________*');
      // console.error('error in file: ', file);
      // console.error('error message', error);
      // console.error('*_________END___________*');
    }
  }
  return docs;
};
