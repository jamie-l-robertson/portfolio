import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { prefersReducedMotionContext } from "@stores/reduceMotion.context";
import { useUrl } from "@hooks/url.hook";
import { useReduceMotion } from "@hooks/reduceMotion.hook";
import { urlContext } from "@stores/url.context";
import theme from "@theme";
import Header from "@components/header";
import Footer from "@components/footer";

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    offset: '120'
  })
}

const GlobalStyle = theme.GlobalStyle;

const Layout = ({ children, ...props }) => {
  const url = useUrl();
  const reducedMotion = useReduceMotion();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <prefersReducedMotionContext.Provider value={{ reducedMotion }}>
        <urlContext.Provider value={url}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </urlContext.Provider>
      </prefersReducedMotionContext.Provider>
    </ThemeProvider>
  );
}

export default Layout;
