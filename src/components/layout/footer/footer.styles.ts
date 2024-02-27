'use client';

import { Container } from '@/components/elements/container';
import { screens, styled } from '@/styles';

export const StyledFooter = styled.footer`
  margin-top: 64px;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  gap: 64px;

  @media (min-width: ${screens.md}) {
    flex-direction: row;
    gap: 128px;
  }
`;

export const StyledColumn = styled.div`
  &:first-child {
    min-width: min-content;

    @media (min-width: ${screens.xl}) {
      min-width: 398px;
    }
  }

  &:last-child {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (min-width: ${screens.sm}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    @media (min-width: ${screens.xl}) {
      grid-template-columns: repeat(4, 1fr);
      gap: 91px;
    }

    & div {
      min-width: max-content;
    }
  }
`;

export const StyledMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

export const StyledSeparator = styled.hr`
  border-color: ${({ theme }) => theme.colors.mediumGrey};
  margin: 24px 0;

  @media (min-width: ${screens.xl}) {
    margin: 48px 0;
  }
`;

export const StyledFooterCopySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 16px;

  @media (min-width: ${screens.xl}) {
    flex-direction: row;
  }
`;
