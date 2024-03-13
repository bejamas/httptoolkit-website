import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import { PricingPlans } from '@/components/sections/pricing/plans';

export default function PricingPage() {
  return (
    <>
      <Container>
        <Heading color="textGradient">Pricing</Heading>
      </Container>
      <PricingPlans />
    </>
  );
}
