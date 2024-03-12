'use client';

import { styled } from '@/styles';

export const StyledPostGrid = styled.div`
  columns: 1;

  @media (min-width: 768px) {
    columns: 2;
  }

  & article {
    break-inside: avoid;
    margin-bottom: 24px;
  }
`;
