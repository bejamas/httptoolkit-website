import { MobileHeader } from './header-mobile';
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledNavItems,
  StyledNavigation,
} from './header.styles';
import type { HeaderProps } from './header.types';

import { Link } from '@/components/elements/link';
import { Text } from '@/components/elements/text';
import { Dropdown } from '@/components/modules/dropdown';
import type { DropdownOptionProps } from '@/components/modules/dropdown/dropdown.types';
import Logo from '@/images/logo.svg';

export const Header = ({ isNavigationEnabled = true }: HeaderProps) => {
  const navigationItems = [
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/docs',
      label: 'Docs',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
    {
      href: '/integrations',
      label: 'Integrations',
    },
  ];

  const dropdownItems: DropdownOptionProps[] = [
    {
      content: 'for MacOS DMG',
    },
    {
      content: 'MacOS via Homebrew',
    },
    {
      content: 'Windows Installer',
    },
    {
      content: 'Windows Standalone Zip',
    },
    {
      content: 'Windows via Winget',
    },
    {
      content: 'Linux Debian package',
    },
    {
      content: 'Linux Arch Package via Aur',
    },
    {
      content: 'Linux Standalone Zip',
    },
  ];

  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledLogoWrapper>
          <Link href="/" aria-label="Go to home">
            <Logo />
          </Link>
        </StyledLogoWrapper>
        <MobileHeader navigationItems={navigationItems} dropdownItems={dropdownItems} />
        {isNavigationEnabled ? (
          <StyledNavigation>
            <StyledNavItems>
              {navigationItems.map(navItem => {
                return (
                  <Link key={`${navItem.label}-${navItem.href}`} href={navItem.href}>
                    <Text as="span" fontSize="m">
                      {navItem.label}
                    </Text>
                  </Link>
                );
              })}
            </StyledNavItems>
            <Dropdown $variant="secondary" $small items={dropdownItems} aria-label="Download Items">
              Download for macOS
            </Dropdown>
          </StyledNavigation>
        ) : null}
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};
