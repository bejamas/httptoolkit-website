import { StyledCTAWrapper, StyledContainer, StyledExcerpt, StyledHeroWrapper } from './cta.styles';
import type { CTAProps } from './cta.types';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { SquareIcon } from '@/components/elements/square-icon';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemedImage } from '@/components/elements/themed-image';
import { dropdownItems } from '@/components/layout/header';
import { Dropdown } from '@/components/modules/dropdown';

export const CTA = ({
  icon,
  heading,
  subHeading,
  excerpt,
  cta,
  withDownload = true,
  textAppearance = 'large',
  image,
  $variant = 'cta-hero',
}: CTAProps) => {
  const SubHeadingIcon = subHeading?.icon;
  const isHero = $variant === 'cta-hero';
  const asTitle = isHero ? 'h1' : 'h3';
  const isLargeText = textAppearance === 'large';

  return (
    <StyledHeroWrapper $variant={$variant}>
      <StyledContainer>
        {icon && (
          <SquareIcon $size={isHero ? 'xLarge' : 'large'} $variant={isHero ? 'primary' : 'secondary'} icon={icon} />
        )}
        {subHeading && (
          <Text as="label" color="cinnarbarRed" fontSize={isLargeText ? 'xll' : 'm'} fontWeight="bold">
            {subHeading?.text} {SubHeadingIcon && <SubHeadingIcon weight="fill" />}
          </Text>
        )}
        <Stack $gapxl={isLargeText ? '32px' : '16px'}>
          <Heading color="textGradient" as={asTitle} fontSize={isLargeText ? 'xl' : 'l'}>
            {heading}
          </Heading>
          {excerpt && <StyledExcerpt fontSize="l">{excerpt}</StyledExcerpt>}

          {/* TODO: Use the download feature instead when is ready */}
          {(withDownload || cta) && (
            <StyledCTAWrapper $isLargeText={isLargeText}>
              {withDownload ? (
                <Dropdown $variant="primary" $withBorder={isHero} items={dropdownItems} aria-label="Download Items">
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

          {image && <ThemedImage title={heading || image.title} {...image} />}
        </Stack>
      </StyledContainer>
    </StyledHeroWrapper>
  );
};
