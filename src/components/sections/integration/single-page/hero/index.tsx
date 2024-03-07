import {
  StyledHeroContent,
  StyledHeroContentWrapper,
  StyledHeroImage,
  StyledHeroImageWrapper,
  StyledHeroWrapper,
} from './hero.styles';
import type { IntegrationSinglePageHeroProps } from './hero.types';

import { Heading } from '@/components/elements/heading';
import { Logo, X } from '@/components/elements/icon';
import { Text } from '@/components/elements/text';
import { Breadcrumbs } from '@/components/modules/breadcrumbs';
import { DownloadButton } from '@/components/modules/download-button';

const breadcrumbs = [
  {
    href: '/',
    text: 'Main page',
  },
  {
    href: '/integrations',
    text: 'integrations',
  },
];

export const IntegrationSinglePageHero = ({
  title,
  text,
  icon: Icon,
  breadcrumbText,
}: IntegrationSinglePageHeroProps) => {
  return (
    <StyledHeroWrapper>
      <StyledHeroContentWrapper>
        <Breadcrumbs links={[...breadcrumbs, { text: breadcrumbText }]} />
        <StyledHeroContent>
          <Heading fontSize="l" color="textGradient">
            {title}
          </Heading>
          <Text fontSize="m" color="darkGrey">
            {text}
          </Text>
          <DownloadButton $variant="primary" />
        </StyledHeroContent>
      </StyledHeroContentWrapper>
      <StyledHeroImageWrapper>
        <StyledHeroImage>
          <Icon />
          <X />
          <Logo />
        </StyledHeroImage>
      </StyledHeroImageWrapper>
    </StyledHeroWrapper>
  );
};
