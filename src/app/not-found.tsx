import { RocketLaunch } from '@/components/elements/icon';
import { Hero } from '@/components/sections/hero';

export default function NotFound() {
  return (
    <Hero
      subHeading={{ text: '404 error' }}
      heading="We can't find that page"
      excerpt="Sorry, the page you are looking for doesn't exist or has been moved."
      withDownload={false}
      cta={{
        title: 'Go to the Homepage',
        icon: RocketLaunch,
        href: '/',
        $variant: 'primary',
      }}
    />
  );
}
