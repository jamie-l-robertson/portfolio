import React from "react";
import Layout from "@components/layout";
import SEO from "@components/seo";
import { Container, Inner } from "@theme";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Inner>
        <h1>PAGE NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... uh oh!</p>
      </Inner>
    </Container>
  </Layout>
);

export default NotFoundPage;
