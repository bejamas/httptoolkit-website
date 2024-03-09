import Marquee from 'react-fast-marquee';

import { TestimonialsCard } from './testimonials-card';
import { StyledTestimonialGrid, StyledTestimonialsWrapper } from './testimonials.styles';

import { Heart } from '@/components/elements/icon';
import type { IconAvatar } from '@/components/elements/icon-avatar';
import { HeadingBlock } from '@/components/modules/heading-block';
import articleTestimonials from '@/content/data/article-testimonials.json';
import reeditTestimonials from '@/content/data/reddit-testimonials.json';
import tweetTestimonials from '@/content/data/tweet-testimonials.json';
import { getGithubDownloadStats } from '@/lib/services/get-github-download-stats';
import { shuffleArray } from '@/lib/utils';

export const Testimonials = async () => {
  const userDownloads = await getGithubDownloadStats();
  const allTestimonials = [...articleTestimonials, ...reeditTestimonials, ...tweetTestimonials];
  const testimonialsData = shuffleArray(allTestimonials.concat(allTestimonials)).map(item => {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      id: item?.link || item?.id,
      quote: item.quote,
      icon: item.icon,
    };
  });

  const chunkedData = Array.from({ length: Math.ceil(testimonialsData.length / 3) }, (_, index) =>
    testimonialsData.slice(index * 3, index * 3 + 3),
  );

  return (
    <StyledTestimonialsWrapper>
      <HeadingBlock
        badgeVariant="primary"
        badgeTitle="TESTIMONIALS"
        badgeIcon={Heart}
        title={`Join ~*${userDownloads.toLocaleString()}*~ developers`}
        $align="center"
      />

      <Marquee pauseOnHover>
        <StyledTestimonialGrid>
          {chunkedData.map((chunk, rowIndex) => (
            <div key={rowIndex}>
              {chunk.map((testimonial, colIndex) => {
                if (!testimonial?.quote) {
                  return null;
                }
                return (
                  <TestimonialsCard key={colIndex} text={testimonial?.quote} icon={testimonial?.icon as IconAvatar} />
                );
              })}
            </div>
          ))}
        </StyledTestimonialGrid>
      </Marquee>
    </StyledTestimonialsWrapper>
  );
};
