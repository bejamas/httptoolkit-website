import path from 'path';

import { kebabCase } from 'lodash';

import Content from './content.mdx';

import { ContentWithTable } from '@/components/sections/content-with-table';
import type { ContentWithTableProps } from '@/components/sections/content-with-table/content-with-table.type';
import { HeroPoints } from '@/components/sections/hero-points';
import type { HeadingGroup} from '@/lib/mdx/extract-tittles';
import { extractHeadingsFromMDX } from '@/lib/mdx/extract-tittles';


interface HeadingGroupWithSubItems extends HeadingGroup {
  subItems: HeadingGroup[];
}

function groupByLevel(data: HeadingGroup[]) {
  const grouped: HeadingGroupWithSubItems[] = [];

  data.forEach(item => {
    if (item.level === 2) {
      grouped.push({
        ...item,
        subItems: [],
      });
    } else {
      const parentLevel2 = grouped[grouped.length - 1];
      if (parentLevel2) {
        parentLevel2.subItems.push(item);
      }
    }
  });

  return grouped;
}

function formatLinks(headings: HeadingGroupWithSubItems[]): ContentWithTableProps['links'] {
  return headings.map(heading => ({
    text: heading.text,
    href: `#${kebabCase(heading.text)}`,
    subItems: heading.subItems.map(subItem => ({
      text: subItem.text,
      href: `#${kebabCase(subItem.text)}`,
    })),
  }));
}

export default async function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'src', 'app', '(legal)', 'privacy-policy', 'content.mdx');
  const headings = await extractHeadingsFromMDX(filePath);
  const groups = groupByLevel(headings);
  const links = formatLinks(groups);

  return (
    <>
      <HeroPoints
        title="Privacy Policy"
        text={`**The text below formally defines what data HTTP Toolkit collects, how HTTP Toolkit uses your data, and why.** \n\n **HTTP Toolkit does its best to avoid collecting data about you wherever possible. The content of your HTTP(S) requests & responses is never collected, and this is stored only locally on your machine. Users of HTTP Toolkit are typically completely anonymous, except for users who explicitly log into HTTP Toolkit accounts, and HTTP Toolkit takes efforts to preserve the anonymity of collected data wherever possible.** \n\n **If you have suggestions for ways to improve user privacy, let us know at github.com/httptoolkit/httptoolkit. If you'd like to see exactly what data HTTP Toolkit collects up close, feel free to take a look at the source for yourself.**`}
      />
      <ContentWithTable content={Content} links={links} />
    </>
  );
}
