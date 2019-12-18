import React, { useEffect } from "react";
import { Globals } from "react-spring";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { useReduceMotion } from "@hooks/reduceMotion.hook";
import { useUrl } from "@hooks/url.hook";
import { urlContext } from "@stores/url.context";
import { theme, GlobalStyle } from "@theme";
import Header from "@components/header";
import Footer from "@components/footer";

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
  `);

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
