import { StyledCTAWrapper, StyledContainer, StyledExcerpt, StyledHeading, StyledHeroWrapper } from './hero.styles';

import { Button } from '@/components/elements/button';
import type { ButtonProps } from '@/components/elements/button/button.types';
import { SquareIcon } from '@/components/elements/square-icon';
import type { IconType } from '@/components/elements/square-icon/square-icon.types';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemedImage, type ThemeImageProps } from '@/components/elements/themed-image';
import { dropdownItems } from '@/components/layout/header';
import { Dropdown } from '@/components/modules/dropdown';

export type CTA = Pick<ButtonProps, 'icon' | 'href' | 'onClick' | '$withBorder' | '$small' | '$variant'> & {
  title: string;
};

export interface HeroProps {
  heading: string;
  subHeading?: {
    text: string;
    icon?: IconType;
  };
  excerpt?: string;
  withDownload?: boolean;
  cta?: CTA;
  icon?: IconType;
  image?: ThemeImageProps;
}

export const Hero = ({ icon, heading, subHeading, excerpt, cta, withDownload = true, image }: HeroProps) => {
  const SubHeadingIcon = subHeading?.icon;
  return (
    <StyledHeroWrapper>
      <StyledContainer>
        {icon && <SquareIcon $size="xLarge" icon={icon} />}
        {subHeading && (
          <Text as="label" color="cinnarbarRed" fontSize="xll" fontWeight="bold">
            {subHeading?.text} {SubHeadingIcon && <SubHeadingIcon weight="fill" />}
          </Text>
        )}
        <Stack $gapxl="32px">
          <StyledHeading color="textGradient">{heading}</StyledHeading>
          {excerpt && <StyledExcerpt fontSize="l">{excerpt}</StyledExcerpt>}

          {/* TODO: Use the download feature instead when is ready */}
          {(withDownload || cta) && (
            <StyledCTAWrapper>
              {withDownload ? (
                <Dropdown $variant="primary" $withBorder items={dropdownItems} aria-label="Download Items">
                  Download for macOS
                </Dropdown>
              ) : null}

              {cta && (
                <Button as="link" $variant={cta.$variant || 'secondary'} href={cta.href} icon={cta.icon}>
                  {cta.title}
                </Button>
              )}
            </StyledCTAWrapper>
          )}
        </Stack>
        {image && <ThemedImage title={heading || image.title} {...image} />}
      </StyledContainer>
    </StyledHeroWrapper>
  );
};
