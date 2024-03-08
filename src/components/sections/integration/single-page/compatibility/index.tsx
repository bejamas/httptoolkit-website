import { CompatibilityBadge } from './badge';
import {
  StyledCompatibilityBadgeWrapper,
  StyledIntegrationCompatibilityContent,
  StyledIntegrationCompatibilityContentTitle,
  StyledIntegrationCompatibilityContentWrapper,
  StyledIntegrationCompatibilityGradientWrapper,
  StyledIntegrationCompatibilityLabel,
  StyledIntegrationCompatibilityWrapper,
} from './compatibility.styles';
import type { IntegrationCompatibilityProps } from './compatibility.types';

import { Gradient } from '@/components/elements/gradient';
import { Heading } from '@/components/elements/heading';
import { DownloadButton } from '@/components/modules/download-button';

export const IntegrationCompatibility = ({ title, subtitle, tools }: IntegrationCompatibilityProps) => {
  return (
    <StyledIntegrationCompatibilityWrapper>
      <StyledIntegrationCompatibilityGradientWrapper>
        <Gradient $shape="full" />
      </StyledIntegrationCompatibilityGradientWrapper>
      <StyledIntegrationCompatibilityContentWrapper>
        <StyledIntegrationCompatibilityContent>
          <StyledIntegrationCompatibilityContentTitle>
            <StyledIntegrationCompatibilityLabel>{subtitle}</StyledIntegrationCompatibilityLabel>
            <Heading as="h2" fontSize="l" color="textGradient">
              {title}
            </Heading>
          </StyledIntegrationCompatibilityContentTitle>
          <DownloadButton $small $variant="secondary" />
        </StyledIntegrationCompatibilityContent>
        <StyledCompatibilityBadgeWrapper>
          {Array.isArray(tools) &&
            tools.length > 0 &&
            tools.map(tool => <CompatibilityBadge key={tool}>{tool}</CompatibilityBadge>)}
        </StyledCompatibilityBadgeWrapper>
      </StyledIntegrationCompatibilityContentWrapper>
    </StyledIntegrationCompatibilityWrapper>
  );
};
