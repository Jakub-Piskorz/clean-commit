import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import DefaultSEO from "@/components/DefaultSEO";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/main.scss";

const HomePage = ({ data }) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
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
          <div className="hotel-form">
            <form action="/action_page.php">
              <label htmlFor="fname">Where you go?</label>
              <br />
              <input
                type="text"
                id="fname"
                name="location"
                placeholder='try "Singapore"'
              />
              <br />
              <div className="col-2">
                <div>
                  <label htmlFor="check-in">Check In</label>
                  <br />
                  <DatePicker
                    selected={checkIn}
                    onChange={date => setCheckIn(date)}
                  />
                </div>
                <div>
                  <label htmlFor="check-out">Check Out</label>
                  <DatePicker
                    selected={checkOut}
                    onChange={date => setCheckOut(date)}
                  />
                </div>
              </div>
              <label for="guests-select">Guest</label>
              <select
                name="guests"
                placeholder="How many guest ?"
                id="guests-select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="group">Group (5-20)</option>
              </select>
              <input type="checkbox" value="pay" name="pay" />
              <label for="pay">Pay when checking in?</label>
              <br />
              <input type="submit" className="submit" value="Search Hotel" />
            </form>
          </div>
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
