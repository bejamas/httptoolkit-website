'use client';

import { css, screens, styled } from '@/styles';

export const StyledSendEmailWrapper = styled.div<{ $isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.inkBlack};
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.button.border},
    0 0 8px 0 ${({ theme }) => theme.colors.shadowDefault};

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      &&& p,
      &&& span,
      &&& input,
      &&& button {
        background: ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.darkGrey};
        border-radius: 4px;
        box-shadow: 0 0 0 ${({ theme }) => theme.colors.darkGrey};
        border-color: ${({ theme }) => theme.colors.darkGrey};
        animation: pulse 1.5s infinite alternate;

        &::placeholder {
          color: transparent;
        }
      }
    `}

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: ${screens.md}) {
    display: none;
  }

  &&[data-is-in-header='true'] p {
    @media screen and (max-height: 700px) {
      &:first-child {
        display: block;
      }

      display: none;
    }
  }
`;

export const StyledSendEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
