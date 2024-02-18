// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

export { styled, css, ThemeProvider };

export const media = {
  desktop: (...args) => css`
    @media (min-width: 1084px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 600px) and (max-width: 1083px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 599px) {
      ${css(...args)}
    }
  `,

  // Combos:
  desktopOrTablet: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  mobileOrTablet: (...args) => css`
    @media (max-width: 1083px) {
      ${css(...args)}
    }
  `,
};

export const theme = {
  mainBackground: '#fafafa',
  mainColor: '#222',
  mainSubtleColor: '#7398a5',

  popColor: '#e1421f',
  popBackground: '#fff',
  popGradient: css`
    background: linear-gradient(to left, #d04125, #e0421f, #ff5724);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  `,

  primaryInputBackground: '#1076b9',
  primaryInputColor: '#fafafa',

  containerBackground: '#d8e2e6',
  containerWatermark: '#b6c2ca',
  containerBorder: '#abb4ba',

  pageWidth: { desktop: '1024px', tablet: '100%', mobile: '100%' },
  headerHeight: '80px',

  fontSizeUltraHeading: css`
    ${media.desktop`font-size: 80px`}
    ${media.tablet`font-size: 66px`}
        ${media.mobile`font-size: calc(40px + 5vw)`}
  `,

  fontSizeBiggerHeading: css`
    ${media.desktop`font-size: 66px`}
    ${media.tablet`font-size: 52px`}
        ${media.mobile`font-size: calc(26px + 5vw)`}
  `,

  fontSizeHeading: css`
    ${media.desktop`font-size: 48px`}
    ${media.tablet`font-size: 40px`}
        ${media.mobile`font-size: calc(22px + 5vw)`}
  `,

  fontSizeNearlyHeading: css`
    ${media.desktop`font-size: 35px`}
    ${media.tablet`font-size: 32px`}
        ${media.mobile`font-size: calc(19px + 3vw)`}
  `,

  fontSizeSubheading: css`
    ${media.desktop`font-size: 22px`}
    ${media.tablet`font-size: 20px`}
        ${media.mobile`font-size: calc(14px + 2vw)`}
  `,

  fontSizeText: css`
    ${media.desktop`font-size: 18px`}
    ${media.tablet`font-size: 16px`}
        ${media.mobile`font-size: calc(12px + 1.5vw)`}
  `,

  fontSizeTinyText: css`
    ${media.desktop`font-size: 14px`}
    ${media.tablet`font-size: 12px`}
        ${media.mobile`font-size: calc(10px + 0.5vw)`}
  `,
};

export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    a {
        color: #000;
    }

    strong {
        font-weight: bold;
    }

    body {
        background-color: ${theme.containerBackground};
        overflow-x: hidden;
        font-family: 'Lato', sans-serif;
    }

    em {
        font-style: italic;
    }

    .tippy-tooltip-content li:not(:first-child) {
        margin-top: 10px;
    }

    .gatsby-highlight-code-line {
        background-color: #444;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #e1421f;
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

    iframe#infowarship {
        z-index: 1000;
        border: 3px solid #000;
    }
`;
