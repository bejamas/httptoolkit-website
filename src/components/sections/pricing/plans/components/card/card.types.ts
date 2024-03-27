export interface StyledPricingCardProps {
  $isHighlighted?: boolean;
}

interface Features {
  text: string;
  items: string[];
}

export interface PricingCardProps extends StyledPricingCardProps {
  id: string;
  title: string;
  price?: number | JSX.Element;
  priceDescription: string;
  isPaidYearly?: boolean;
  features: Features[];
  status?: string;
}
