import { marked } from 'marked';

import { StyledAuthorDetails, StyledAuthorWrapper, StyledTestimonialCard } from './testimonials.styles';

import { IconAvatar } from '@/components/elements/icon-avatar';
import { Text } from '@/components/elements/text';
import { renderer } from '@/lib/marked/link-target-render';

interface TestimonialsCardProps {
  text: string;
  icon?: IconAvatar;
}

export const TestimonialsCard = ({ text, icon = 'article' }: TestimonialsCardProps) => {
  return (
    <StyledTestimonialCard>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(text, { renderer }) }}></div>
      <StyledAuthorWrapper>
        <IconAvatar icon={icon} />
        <StyledAuthorDetails>
          <Text fontSize="l" fontWeight="medium">
            Michael Peterson
          </Text>
          <Text fontSize="m">Full-Stack Developer, Vercel</Text>
        </StyledAuthorDetails>
      </StyledAuthorWrapper>
    </StyledTestimonialCard>
  );
};
