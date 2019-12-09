import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CardList from "../components/cardList"
import Brandbar from "../components/brandbar"
import Socialbar from "../components/socialbar"
import Contact from "../components/contact"

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
  const {
    datoCmsHomepage: { hero },
    allDatoCmsProject,
  } = data

  return (
    <Layout>
      <SEO title="Jamie Robertson - Home" />
      <Hero data={hero} />
      {/* <CardList heading="Recent work" cards={allDatoCmsProject.edges} /> */}

      {/* <Contact /> */}
    </Layout>
  )
}

export default IndexPage
