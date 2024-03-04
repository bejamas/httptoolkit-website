import { Hero } from '@/components/sections/hero';

export default async function FiddlerPage() {
  return (
    <Hero
      heading="Looking for a Fiddler alternative?"
      excerpt="HTTP Toolkit is a modern powerful alternative to Fiddler designed from the ground up for instant targeted debugging and control of any HTTP(S) traffic."
      image={{
        darkSrc: '/images/hero-placeholder-dark.webp',
        lightSrc: '/images/hero-placeholder-light.webp',
        withBorderAnimation: true,
        alt: 'Hero',
        priority: true,
      }}
    />
  );
}
