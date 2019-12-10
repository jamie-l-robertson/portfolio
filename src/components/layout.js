import React, { useEffect } from "react";
import { Globals } from 'react-spring';
import { useReduceMotion } from 'react-reduce-motion';
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../theme";

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const prefersReducedMotion = useReduceMotion();
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
