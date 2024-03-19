import { LandingLayout } from '@/components/layout/landing-layout';
import { CTA } from '@/components/sections/cta';

export default function WillItCors() {
  return (
    <LandingLayout>
      <CTA
        $variant="pricing-hero"
        textAppearance="small"
        heading="Will it CORS?"
        excerpt="Cross-Origin Resource Sharing (CORS) is how browsers decide how web applications can communicate with other services.
        Restricting this is important for security, but it's hard to understand how CORS works, which means sending HTTP requests to APIs can be difficult & confusing.
        Tell this magic CORS machine what you want, and it'll tell you exactly what to do!"
        withDownload={false}
        cta={{
          title: 'Get Started!',
          $variant: 'primary',
          $withBorder: true,
        }}
      />
    </LandingLayout>
  );
}
