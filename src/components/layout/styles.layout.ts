'use client';

import { screens, styled } from '@/styles';

export const StyledLandingLayoutWrapper = styled.div`
  height: 100vh;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${screens['md']}) {
    overflow: hidden;

    & main {
      flex: 1; /* Allow the main content to grow and take up remaining space */
      display: flex;
      justify-content: center; /* Center content horizontally */
      align-items: center; /* Center content vertically */

      width: 100%;
      height: 100%;
    }

    & section:first-of-type {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
`;
