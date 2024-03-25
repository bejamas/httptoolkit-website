'use client';

import {
  StyledPriceCardFeature,
  StyledPriceCardFeatureItemLI,
  StyledPriceCardFeatureItemsWrapper,
  StyledPriceCardPrice,
  StyledPricingCardButtonWrapper,
  StyledPricingCardPriceWrapper,
  StyledPricingCardWrapper,
} from './card.styles';
import type { PricingCardProps } from './card.types';

import { CheckIcon } from '@/components/elements/check-icon';
import { Text } from '@/components/elements/text';
import type { TextProps } from '@/components/elements/text/text.types';

const renderFeatures = (
  feature: PricingCardProps['features'][number],
  $isHighlighted: PricingCardProps['$isHighlighted'],
) => {
  const textColor: TextProps['color'] = $isHighlighted ? 'white' : 'lightGrey';
  const itemColor: TextProps['color'] = $isHighlighted ? 'white' : 'darkGrey';

  return (
    <StyledPriceCardFeature>
      <Text fontSize="m" fontWeight="medium" color={textColor} textAlign="left">
        {feature.text}
      </Text>
      <StyledPriceCardFeatureItemsWrapper>
        {Array.isArray(feature.items) &&
          feature.items?.length > 0 &&
          feature.items.map(item => (
            <StyledPriceCardFeatureItemLI>
              <CheckIcon />
              <Text fontSize="m" color={itemColor} textAlign="left">
                {item}
              </Text>
            </StyledPriceCardFeatureItemLI>
          ))}
      </StyledPriceCardFeatureItemsWrapper>
    </StyledPriceCardFeature>
  );
};

export const PricingCard = ({
  title,
  price,
  priceDescription,
  features,
  $isHighlighted,
  children,
}: Component<PricingCardProps>) => {
  const TextColor: TextProps['color'] = $isHighlighted ? 'white' : 'lightGrey';
  return (
    <StyledPricingCardWrapper $isHighlighted={$isHighlighted}>
      <StyledPricingCardPriceWrapper>
        <Text fontSize="l" color={TextColor}>
          {title}
        </Text>
        <Text fontSize="l" color="lightGrey">
          <StyledPriceCardPrice>
            {price === 0 ? 'Free' : '$'}
            {price !== 0 && price}
          </StyledPriceCardPrice>
          {priceDescription}
        </Text>
      </StyledPricingCardPriceWrapper>
      <StyledPricingCardButtonWrapper>{children}</StyledPricingCardButtonWrapper>
      {Array.isArray(features) &&
        features.length > 0 &&
        features.map(feature => renderFeatures(feature, $isHighlighted))}
    </StyledPricingCardWrapper>
  );
};
