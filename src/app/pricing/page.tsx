import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { CTA } from '@/components/sections/cta';

export default function PricingPage() {
  return (
    <>
      <Container>
        <Heading color="textGradient">Pricing</Heading>
      </Container>
      <CTA
        $variant="pricing-hero"
        heading="Developer tools built for professionals"
        subHeading={{
          text: 'pricing',
        }}
        excerpt="Your time is valuable. HTTP Toolkit gives you instant insight and access into every request & response, with zero hassle. Test clie nts, debug APIs and catch bugs, all at lightning speed."
        withDownload={false}
      ></CTA>
    </>
  );
}
