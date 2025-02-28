import 'server-only';

import fs from 'fs';
import path from 'path';

import { compileMDX } from 'next-mdx-remote/rsc';

import { extractExcerpt } from '../utils/extract-excerpt';
import { markdowRegex, isMarkdown } from '../utils/is-markdown';

import { defaultComponents, postComponents } from '@/components/sections/rich-text/components';

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const realSlug = slug.replace(markdowRegex, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX<PostFrontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: { ...defaultComponents, ...postComponents },
  });

  const excerpt = extractExcerpt(fileContent);

  const post: Post = {
    title: frontmatter?.title ?? '',
    date: frontmatter?.date ?? '',
    coverImage: frontmatter?.cover_image ?? '',
    tags: frontmatter?.tags ? frontmatter?.tags.split(',')?.map(tag => tag?.trim()) : [],
    isFeatured: frontmatter?.isFeatured ?? false,
    isDraft: frontmatter?.draft ?? false,
    excerpt,
    slug: realSlug,
    author: {
      name: frontmatter.author ?? 'Tim Perry',
      url: frontmatter.authorUrl ?? 'https://tim.fyi/',
    },
    socialLinks: {
      twitterUrl: frontmatter.twitterUrl,
      devToUrl: frontmatter.devToUrl,
      redditUrl: frontmatter.redditUrl,
      hackerNewsUrl: frontmatter.hackerNewsUrl,
      productHuntUrl: frontmatter.productHuntUrl,
    },
    content,
  };

  return post;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);
  const posts = [];

  for (const file of files) {
    try {
      if (isMarkdown(file)) {
        const post = await getPostBySlug(file);
        posts.push(post);
      }
    } catch (error) {
      console.error('*_________START___________*');
      console.error('error in file: ', file);
      console.error('error message', error);
      console.error('*_________END___________*');
    }
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getRelatedPosts = async ({ tags, currentPostSlug }: { tags: string[]; currentPostSlug: string }) => {
  const allPosts = await getAllPostsMeta();

  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .filter(post => {
      return tags.some(tag => post.tags.includes(tag));
    })
    .slice(0, 3);

  return relatedPosts;
};

export const getAllCategoryTags = async () => {
  const allPosts = await getAllPostsMeta();

  const tagCounts: { [key: string]: number } = {};

  allPosts.forEach(post => {
    post.tags.forEach((tag: string) => {
      const formattedTag = tag.toLowerCase().trim();
      tagCounts[formattedTag] = (tagCounts[formattedTag] || 0) + 1;
    });
  });

  const allCategoryTagsOrdered = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);

  return allCategoryTagsOrdered;
};
