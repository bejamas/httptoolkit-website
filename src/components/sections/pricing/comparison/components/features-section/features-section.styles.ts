'use client';

import { Text } from '@/components/elements/text';
import { styled } from '@/styles';

export const StyledFeaturesSectionWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledFeatureSectionItemWrapper = styled.div`
  &:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  }
`;

export const StyledFeatureSectionTitle = styled(Text)`
  padding: 18.5px 0;
`;

export const StyledFeatureSectionItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 52px;
  min-height: 48px;
  padding: 13.5px 0;
`;

export const StyledFeatureSectionItemTitleWrapper = styled.div`
  display: flex;
  gap: 6px;
`;
