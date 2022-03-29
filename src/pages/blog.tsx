import * as React from 'react';
import { graphql} from 'gatsby';
import Layout from "../components/layout";
import { LazyMotion, domAnimation } from "framer-motion";
import SEO from "../components/seo";
import ContactPanel from "../components/contactPanel";
import BackToTop from '../components/backToTop';
import CardList from '../components/cardList';
import Standfirst from '../components/standfirst';

export const query = graphql`
  query BlogQuery {
    allDatoCmsArticle(filter: {meta: {status: {eq: "published"}}}) {
      edges {
        node {
          title
          id
          originalId
          contentArea {
            intro
            image {
              fluid {
                srcSet
                src
              }
            }
          }
          featureImage {
            gatsbyImageData(width: 350, placeholder: BLURRED)
          }
        }
      }
      pageInfo {
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
        currentPage
        perPage
      }
    }
  }
`;

const Blog = ({ data }) => {
  const { allDatoCmsArticle } = data;

  return(
    <Layout>
      <SEO title="Blog" />
      <LazyMotion features={domAnimation} strict>
        {allDatoCmsArticle && <CardList id="posts" heading="Recent posts" cards={allDatoCmsArticle.edges} showLinks={true} />} 
          <ContactPanel id="contact" title="Get in touch" buttonText="Send a message" />
          <BackToTop offset={200} />
      </LazyMotion>
    </Layout>
  );
};

export default Blog;