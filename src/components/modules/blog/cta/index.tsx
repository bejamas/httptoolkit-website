import { StyledBlogCTASubtitle, StyledBlogCTAWrapper } from './cta.styles';
import type { BlogCTAProps } from './cta.types';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { CaretRight } from '@/components/elements/icon';

export const BlogCTA = ({ title, buttonText, subtitle, buttonHref }: BlogCTAProps) => {
  return (
    <StyledBlogCTAWrapper>
      <StyledBlogCTASubtitle>{subtitle}</StyledBlogCTASubtitle>
      <Heading fontSize="m" color="textGradient">
        {title}
      </Heading>
      <Button as="link" target="_blank" $variant="secondary" href={buttonHref} icon={CaretRight}>
        {buttonText}
      </Button>
    </StyledBlogCTAWrapper>
  );
};
