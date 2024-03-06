import { IconRows } from './components/icon-rows';
import type { IconRowsProps } from './components/icon-rows/icon-rows.types';
import {
  StyledDesktopIconRows,
  StyledIntegrationCTAContent,
  StyledIntegrationCTAWrapper,
  StyledMobileIconRows,
} from './cta.styles';
import type { IntegrationCTAProps } from './cta.types';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { GithubLogo, Globe, Sparkle } from '@/components/elements/icon';
import { Text } from '@/components/elements/text';

const leftIcons: IconRowsProps['rows'] = [
  {
    icons: [Sparkle, GithubLogo, Globe, Sparkle],
    offset: 0.8,
  },
  {
    icons: [Sparkle, GithubLogo, Globe, Globe],
    offset: 0,
  },
  {
    icons: [Sparkle, GithubLogo, Globe, Sparkle],
    offset: 0.6,
  },
];
const rightIcons: IconRowsProps['rows'] = [
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 0.8,
  },
  {
    icons: [Sparkle, GithubLogo, Globe, Sparkle],
    offset: 0,
  },
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 1.6,
  },
];
const mobileIcons: IconRowsProps['rows'] = [
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 0,
  },
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 0.6,
  },
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 0.2,
  },
  {
    icons: [Sparkle, GithubLogo, Globe],
    offset: 0.7,
  },
];

export const IntegrationCTA = ({ title, text, button, $variant }: IntegrationCTAProps) => {
  const HeadingTag = $variant === 'cta' ? 'h2' : 'h1';

  return (
    <StyledIntegrationCTAWrapper $variant={$variant}>
      <StyledDesktopIconRows>
        <IconRows rows={leftIcons} $orientation="left" $offset={0.9} />
      </StyledDesktopIconRows>
      <StyledIntegrationCTAContent $variant={$variant}>
        <Heading as={HeadingTag} fontSize="l" color="lightGrey" textAlign="center">
          {title}
        </Heading>
        <Text fontSize="m" color="darkGrey" textAlign="center">
          {text}
        </Text>
        {button && <Button {...button}>{button.children}</Button>}
      </StyledIntegrationCTAContent>
      <StyledMobileIconRows>
        <IconRows rows={mobileIcons} $orientation="right" $offset={0} />
      </StyledMobileIconRows>
      <StyledDesktopIconRows>
        <IconRows rows={rightIcons} $orientation="right" $offset={0.8} />
      </StyledDesktopIconRows>
    </StyledIntegrationCTAWrapper>
  );
};
