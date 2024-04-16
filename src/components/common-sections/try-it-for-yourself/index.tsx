import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Logo, RocketLaunch } from '@/components/elements/icon';
import type { CTAProps } from '@/components/sections/cta/cta.types';

const CTA = dynamic(() => import('@/components/sections/cta').then(el => el.CTA));

interface TryItForYourselfCTAProps {
  variant?: CTAProps['variant'];
  isFooterClose?: CTAProps['$isFooterClose'];
}

export const TryItForYourselfCTA = ({ variant = 'cta-square', isFooterClose = false }: TryItForYourselfCTAProps) => {
  return (
    <Suspense fallback={null}>
      <CTA
        variant={variant}
        icon={Logo}
        textAppearance="small"
        heading="Try it for yourself"
        excerpt="It is completely free! You can also Go Pro and explore the Http Toolkit with additional features."
        cta={{
          title: 'Go Pro!',
          icon: RocketLaunch,
          href: '/get-pro',
        }}
        $isFooterClose={isFooterClose}
      />
    </Suspense>
  );
};
