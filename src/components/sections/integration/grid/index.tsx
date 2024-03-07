import { StyledIntegrationGrid } from './grid.styles';
import type { IntegrationGridProps } from './grid.types';

import { IntegrationCard } from '@/components/modules/integration-card';

export const IntegrationGrid = ({ cards }: IntegrationGridProps) => {
  return (
    <StyledIntegrationGrid>
      {Array.isArray(cards) && cards.length > 0 && cards.map(card => <IntegrationCard {...card} />)}
    </StyledIntegrationGrid>
  );
};
