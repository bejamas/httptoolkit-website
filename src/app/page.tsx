import { HttpToolkitFeatures } from '@/components/common-sections/http-toolkit-features';
import { MockResponseFeatures } from '@/components/common-sections/mock-response-features';
import { RewriteAnything } from '@/components/common-sections/rewrite-anything';
import { TryItForYourselfCTA } from '@/components/common-sections/try-it-for-yourself';
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
      <HttpToolkitFeatures />
      <TryItForYourselfCTA />
      <MockResponseFeatures />
      <RewriteAnything />
      <Statistics title="Why `*HTTP Toolkit*`?" text="Numbers that speak for themselves:" />
      <Testimonials />
      <TryItForYourselfCTA variant="cta-fluid" />
    </>
  );
}
