import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CardList from "../components/cardList"
import BackgroundParticles from "../components/particles"
import ContentPanel from "../components/contentPanel";
import ContactPanel from "../components/contactPanel";

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
    allDatoCmsProject {
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

    allDatoCmsArticle {
      edges {
        node {
          meta {
            status
            createdAt(fromNow: true)
          }
          id
          originalId
          seoMetaTags {
            id
          }
          locale
          contentArea {
            content
            intro
          }
          title
          featureImage {
            fixed(width: 360) {
              aspectRatio
              width
              height
              src
              srcSet
              sizes
            }
            alt
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {

  console.log(data);
  const {
    datoCmsHomepage: { hero, about },
    allDatoCmsProject,
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundParticles />
      <Hero data={hero} />
      <ContentPanel content={about} />
      <CardList heading="Personal projects" cards={allDatoCmsProject.edges} />

      <ContactPanel title="Get in touch" />
    </Layout>
  )
}

export default IndexPage
