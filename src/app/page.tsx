import { CursorClick } from '@/components/elements/icon';
import { CTA } from '@/components/sections/cta';
import { Statistics } from '@/components/sections/statistics';
import { Testimonials } from '@/components/sections/testimonials';

export default async function HomePage() {
  return (
    <>
      <CTA
        subHeading={{
          text: 'With one click',
          icon: CursorClick,
        }}
        heading="Intercept & view all your HTTP"
        image={{
          darkSrc: '/images/hero-placeholder-dark.webp',
          lightSrc: '/images/hero-placeholder-light.webp',
          withBorderAnimation: true,
          alt: 'Hero',
          loading: 'eager',
        }}
      />
      <Statistics title="Why `*HTTP Toolkit*`?" text="Numbers that speak for themselves:" />
      <Testimonials />
    </>
  );
}
