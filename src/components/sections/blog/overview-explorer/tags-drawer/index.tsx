'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Drawer } from 'vaul';

import {
  StyledDrawerContent,
  StyledMobileDrawerHeading,
  StyledMobileNavigationWrapper,
  StyledMobileTrigger,
} from './tags-drawer.styles';
import { StyledTagText } from '../overview-explorer.styled';

import { ListBullets, XSquare } from '@/components/elements/icon';
import { Link } from '@/components/elements/link';
import { Text } from '@/components/elements/text';

export const TagsDrawer = ({ tags }: { tags: string[] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  // Sync controlled state with drawer menu root state
  const handleOpenChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  // Close the drawer when a tag is clicked
  const handleOnClickTag = (tag: string) => {
    router.push(`/blog?tags=${tag}`, { scroll: false });
    setIsDrawerOpen(false);
  };

  return (
    <Drawer.Root onOpenChange={handleOpenChange} open={isDrawerOpen}>
      <StyledMobileTrigger>
        <ListBullets height={20} width={20} weight="fill" />
        <Text fontSize="l" fontWeight="medium">
          Categories
        </Text>
      </StyledMobileTrigger>
      <Drawer.Portal>
        <StyledDrawerContent>
          <StyledMobileDrawerHeading>
            <Text fontSize="l">Categories</Text>
            <XSquare height={20} width={20} weight="fill" onClick={() => handleOpenChange(false)} />
          </StyledMobileDrawerHeading>
          <StyledMobileNavigationWrapper>
            <li>
              <Link href={`/blog`} scroll={false}>
                <StyledTagText>All posts</StyledTagText>
              </Link>
            </li>
            {tags.map(tag => (
              <li key={tag} className="tagItem" onClick={() => handleOnClickTag(tag)}>
                <Link href={`/blog?tags=${tag}`}>
                  <StyledTagText>{tag}</StyledTagText>
                </Link>
              </li>
            ))}
          </StyledMobileNavigationWrapper>
        </StyledDrawerContent>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};
