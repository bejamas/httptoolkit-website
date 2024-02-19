// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

export { styled, css, ThemeProvider };

export const screens = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

export const theme = {
  screens,
  colors: {
    mainBackground: '#1E2028',
    gray: '#C5C6CA',
  },
  fontSizes: {
    heading: {
      mobile: {
        xl: '3rem', // 48px / 16px = 3rem
        l: '2.5rem', // 40px / 16px = 2.5rem
        m: '2rem', // 32px / 16px = 2rem
        s: '1.5rem', // 24px / 16px = 1.5rem
        xs: '1.25rem', // 20px / 16px = 1.25rem
      },
      desktop: {
        xl: '5rem', // 80px / 16px = 5rem
        l: '3.5rem', // 56px / 16px = 3.5rem
        m: '2rem', // 32px / 16px = 2rem
        s: '1.5rem', // 24px / 16px = 1.5rem
        xs: '1.25rem', // 20px / 16px = 1.25rem
      },
    },
    text: {
      xll: '1.5rem', // 24px / 16px = 1.5rem
      xl: '1.25rem', // 20px / 16px = 1.25rem
      l: '1.125rem', // 18px / 16px = 1.125.5rem
      m: '1rem', // 16px / 16px = 1rem
      s: '0.875rem', // 14px / 16px = 0.875
    },
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
};

export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    a {
      color: ${theme.colors.gray};
    }

    strong {
        font-weight: bold;
    }

    body {
        background-color: ${theme.colors.mainBackground};
        color: ${theme.colors.gray};
        overflow-x: hidden;
        font-size: calc(100% / 1.6);
        line-height: 1.5;
    }

    em {
        font-style: italic;
    }

    .tippy-tooltip-content li:not(:first-child) {
        margin-top: 10px;
    }


    /* Override Auth0's style choices to match the rest of the UI */
    .auth0-lock {
        font-family: Lato, sans-serif !important;

        .auth0-lock-overlay {
            display: none; /* We have our own overlay we'll use instead */
        }

        .auth0-lock-widget {
            overflow: initial !important;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2) !important;
        }

        .auth0-lock-form {
            .auth0-lock-name {
                ${theme.fontSizeHeading} !important;
            }

            p, .auth0-lock-social-button-text {
                font-size: 16px !important;
            }
        }
    }
`;
