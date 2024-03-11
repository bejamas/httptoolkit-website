'use client';

import { Heading } from '@/components/elements/heading';
import { Link } from '@/components/elements/link';
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

export const StyledTermOfServicesLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text.darkGrey};
`;

export const StyledTermOfServicesUL = styled.ul`
  list-style: disc;
  padding-left: 20px;
`;
