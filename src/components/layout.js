import React, { useEffect } from "react";
import { Globals } from 'react-spring';
import { useReduceMotion } from '../helpers/useReduceMotion';
import { urlContext } from '../store/url.context';
import { useUrl } from '../hooks/url.hook';
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../theme";

import Header from "./header"
import Footer from "./footer"

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    offset: '120'
  })
}

const Layout = ({ children, ...props }) => {
  const prefersReducedMotion = useReduceMotion();
  const url = useUrl();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    })
  }, [prefersReducedMotion]);


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <urlContext.Provider value={url}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </urlContext.Provider>
    </ThemeProvider>
  );
}

export default Layout;
