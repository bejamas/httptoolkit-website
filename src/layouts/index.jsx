import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import { injectGlobalStyles, theme } from '../styles';

import wordMarkLogo from '../images/logo-wordmark.png';
import headshot from '../images/tim-small.png';

import { siteMetadata } from '../../gatsby-config.js';

import Header from '../components/header';
import Footer from '../components/footer';

const Main = styled.main`
  margin: 0 auto;
  width: 1024px;
  font-family: Lato;
`;

const LogoLink = styled((props) => <Link className={props.className} to='/'>
  <img src={wordMarkLogo} alt="HTTP Toolkit" />
</Link>)`
  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  outline: none;

  img {
    position: relative;
    top: -1px;

    height: 50%;
  }
`;

const TimLink = styled((props) => 
  <a className={props.className} href='https://tim.fyi'>
    <span>Tim Perry</span> <img src={headshot} alt="Tim Perry" />
  </a>
)`
  text-decoration: none;
  > span {
    text-decoration: underline;
  }

  > img {
    margin: -18px 0 -15px 6px;
    height: 52px;
    vertical-align: middle;
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Main>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik+Mono+One' />
      </Helmet>
      <Header>
        <LogoLink/>
      </Header>

      {children()}

      <Footer>
      &copy; 2018, built by <TimLink/>
      </Footer>
    </Main>
  </ThemeProvider>
);

injectGlobalStyles();

export default TemplateWrapper;