'use client';

import { Heading } from '@/components/elements/heading';
import { Text } from '@/components/elements/text';
import { styled } from '@/styles';

export const StyledTermOfServicesHeading = styled(Heading)`
  margin-bottom: 24px;
`;

export const StyledTermOfServicesText = styled(Text)`
  margin-bottom: 6px;
`;

export const StyledTermOfServicesSectionBreak = styled.div`
  margin-bottom: 26px;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    margin-bottom: 42px;
  }
`;
