import React from "react";
import PropTypes from "prop-types";
import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const HomePage = ({ data }) => {
  return (
    <Layout>
      <main className="mx-auto max-w-4xl px-6">
        <h1 className="font-bold text-h4 mb-5 font-sans">Hotely</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
      </main>
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        links {
          link {
            content
            url
          }
        }
      }
    }
    file(base: { eq: "hotel-main.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
