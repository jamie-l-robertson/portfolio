import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import CardList from "../components/cardList";
import BackgroundParticles from "../components/particles";
import ContentPanel from "../components/contentPanel";
import ContactPanel from "../components/contactPanel";
import BackToTop from '../components/backToTop';

export const query = graphql`
  query IndexQuery {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    }
    datoCmsHomepage {
      hero {
        prefix
        title
        intro
        copyNode {
          childMarkdownRemark {
            html
          }
        }
        link
      }
      about {
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        title
      }
    }
    datoCmsGlobalSetting {
      availableForWork
    }
    allDatoCmsProject(filter: { featuredProject: { eq: true }}) {
      edges {
        node {
          id
          title
          intro
          projectUrl
          repository
          projectDescription
          projectTech
          featuredImage {
            fixed(width: 360) {
              src
              srcSet
            }
          }
          seoMetaTags {
            id
            internal {
              content
              description
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const {
    datoCmsHomepage: { hero, about },
    allDatoCmsProject,
  } = data;

  return (
    <Layout>
      <SEO title="Hello" />
      <BackgroundParticles />
      {hero && <Hero id="home" data={hero} />}
      {about && <ContentPanel id="about" content={about} />}
      {allDatoCmsProject && <CardList id="projects" heading="Personal projects" cards={allDatoCmsProject.edges} />}
      <ContactPanel id="contact" title="Get in touch" />
      <BackToTop offset={200} />
    </Layout>
  )
};

export default IndexPage;
