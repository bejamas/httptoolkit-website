import { Suspense } from 'react';

import { MockResponseFeatures } from '@/components/common-sections/mock-response-features';
import { RewriteAnything } from '@/components/common-sections/rewrite-anything';
import { Statistics } from '@/components/common-sections/statistics';
import { Testimonials } from '@/components/common-sections/testimonials';
import { TryItForYourselfCTA } from '@/components/common-sections/try-it-for-yourself';
import { Layout } from '@/components/layout';
import { HttpToolkitFeatures } from '@/components/sections/alternatives/http-toolkit-features';

export default function AlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      {children}
      <TryItForYourselfCTA />
      <HttpToolkitFeatures />
      <MockResponseFeatures />
      <RewriteAnything />
      <Suspense>
        <Testimonials />
      </Suspense>
      <Suspense>
        <Statistics />
      </Suspense>
      <TryItForYourselfCTA variant="cta-fluid" />
    </Layout>
  );
}
