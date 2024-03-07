import { TestimonialsCard } from './testimonials-card';
import { StyledTestimonialGrid, StyledTestimonialsWrapper } from './testimonials.styles';

import { Heart } from '@/components/elements/icon';
import type { IconAvatar } from '@/components/elements/icon-avatar';
import { HeadingBlock } from '@/components/modules/heading-block';
import articleTestimonials from '@/content/data/article-testimonials.json';
import reeditTestimonials from '@/content/data/reddit-testimonials.json';
import tweetTestimonials from '@/content/data/tweet-testimonials.json';
import { getGithubDownloadStats } from '@/lib/services/get-github-download-stats';

export const Testimonials = async () => {
  const userDownloads = await getGithubDownloadStats();
  const testimonialsData = [...articleTestimonials, ...reeditTestimonials, ...tweetTestimonials].map(item => {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      id: item?.link || item?.id,
      quote: item.quote,
      icon: item.icon,
    };
  });

  return (
    <StyledTestimonialsWrapper>
      <HeadingBlock
        badgeVariant="primary"
        badgeTitle="TESTIMONIALS"
        badgeIcon={Heart}
        title={`Join ~*${userDownloads.toLocaleString()}*~ developers`}
        $align="center"
      />
      <StyledTestimonialGrid>
        {testimonialsData.map(testimonial => {
          if (!testimonial?.quote) {
            return null;
          }

          return (
            <TestimonialsCard key={testimonial?.id} text={testimonial?.quote} icon={testimonial?.icon as IconAvatar} />
          );
        })}
      </StyledTestimonialGrid>
    </StyledTestimonialsWrapper>
  );
};
