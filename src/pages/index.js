import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Layout from "@/components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import DefaultSEO from "@/components/DefaultSEO";
import "@/styles/main.scss";

const HomePage = ({ data }) => {
  return (
    <>
      <DefaultSEO />
      <div className="top-screen">
        <div className="bg">
          <Img
            className="z-0 select-none"
            fluid={data.file.childImageSharp.fluid}
          />
        </div>

        <nav>
          <h1 className="nav-left">Hotely</h1>
          <ul className="nav-right">
            <li>Home</li>
            <li>Find Hotel</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="login">Login</li>
          </ul>
        </nav>
        <div className="section-one">
          <div className="hotel-form"></div>
        </div>
      </div>
    </>
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
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
