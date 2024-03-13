import { StyledPricingComparisonWrapper } from './comparison.styles';
import type { PricingComparisonProps } from './comparison.types';
import { MobileComparisonCard } from './components/mobile-comparison-card';

export const PricingComparison = ({ title, text, plans, features }: PricingComparisonProps) => {
  return (
    <StyledPricingComparisonWrapper>
      {Array.isArray(plans) &&
        plans.length > 0 &&
        plans.map(plan => <MobileComparisonCard title={title} text={text} plan={plan} features={features} />)}
    </StyledPricingComparisonWrapper>
  );
};
