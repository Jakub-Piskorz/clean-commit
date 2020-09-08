import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import DefaultSEO from "@/components/DefaultSEO";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/main.scss";

const HomePage = ({ data }) => {
  // Setting states for calendars in form.
  // checkIn = today; checkOut = today + 3 days;
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(
    new Date().setDate(new Date().getDate() + 3)
  );

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
              <label htmlFor="location">Where you go?</label>
              <br />
              <div id="location-wrapper">
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder='try "Singapore"'
                />
                <i />
              </div>
              <div className="col-2">
                <div>
                  <label htmlFor="check-in">Check In</label>
                  <br />
                  <div id="check-in-wrapper">
                    <DatePicker
                      selected={checkIn}
                      onChange={date => setCheckIn(date)}
                      dateFormat="dd MMM"
                    />
                    <i />
                  </div>
                </div>
                <div>
                  <label htmlFor="check-out">Check Out</label>
                  <div id="check-out-wrapper">
                    <DatePicker
                      selected={checkOut}
                      onChange={date => setCheckOut(date)}
                      dateFormat="dd MMM"
                    />
                    <i />
                  </div>
                </div>
              </div>
              <label for="guests-select">Guest</label>
              <br />
              <div id="guests-wrapper">
                <select
                  name="guests"
                  placeholder="How many guest ?"
                  id="guests-select"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="group">Group (5-20)</option>
                </select>
                <i />
              </div>
              <label id="pay-wrapper" for="pay">
                <input type="checkbox" id="pay" value="pay" name="pay" />
                <span id="pay-icon"></span>Pay when checking in?
              </label>
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
