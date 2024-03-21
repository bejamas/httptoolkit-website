import type { HeadingGroup } from '../mdx/extract-tittles';

export interface HeadingGroupWithSubItems extends HeadingGroup {
  subItems: HeadingGroup[];
}

export function groupByLevel(data: HeadingGroup[], level = 2): HeadingGroupWithSubItems[] {
  const grouped: HeadingGroupWithSubItems[] = [];

  data.forEach(item => {
    const newItem: HeadingGroupWithSubItems = {
      ...item,
      subItems: item.subItems ? groupByLevel(item.subItems, level + 1) : [],
    };

    if (item.level === level) {
      grouped.push(newItem);
    } else {
      const lastGroup = grouped[grouped.length - 1];
      if (lastGroup) {
        if (!lastGroup.subItems) {
          lastGroup.subItems = [];
        }
        lastGroup.subItems.push(newItem);
      }
    }
  });

  return grouped;
}
