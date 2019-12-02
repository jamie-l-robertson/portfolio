import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

// const articlesQuery = graphql`
//   {
//     allDatoCmsArticle(sort: { order: ASC }) {
//       edges {
//         node {
//           meta {
//             status
//             createdAt(fromNow: true)
//           }
//           id
//           originalId
//           seoMetaTags {
//             id
//           }
//           locale
//           contentArea {
//             content
//             intro
//           }
//           title
//           featureImage {
//             fixed(width: 360) {
//               aspectRatio
//               width
//               height
//               src
//               srcSet
//               sizes
//             }
//             alt
//           }
//         }
//       }
//     }
//   }
// `

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
        copy
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
`

const IndexPage = ({ data }) => {
  console.log(data)

  const {
    datoCmsHomepage: { hero },
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={hero} />
    </Layout>
  )
}

export default IndexPage
