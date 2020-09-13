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
            fluid={data.background.childImageSharp.fluid}
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
          <div id="icon1">
            <Img
              className="mr-10"
              style={{ minWidth: "90px" }}
              fluid={data.heart2.childImageSharp.fluid}
            />
          </div>
          <div id="icon2">
            <svg
              width="239"
              height="157"
              viewBox="0 0 239 157"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M217 8H22C14.268 8 8 14.268 8 22V115.355C8 121.125 12.6768 125.801 18.446 125.801C23.4201 125.801 27.7043 129.309 28.6864 134.185L30.5748 143.562C31.5386 148.348 37.5098 150.041 40.8418 146.473L55.996 130.246C58.6436 127.411 62.3488 125.801 66.2279 125.801H217C224.732 125.801 231 119.533 231 111.801V22C231 14.268 224.732 8 217 8Z"
                fill="white"
              />
              <path
                d="M217 4H22C12.0589 4 4 12.0589 4 22V115.355C4 123.334 10.4677 129.801 18.446 129.801C21.5154 129.801 24.1591 131.966 24.7651 134.975L26.6535 144.352C28.2599 152.328 38.2118 155.149 43.7652 149.203L58.9194 132.976C60.8105 130.951 63.4571 129.801 66.2279 129.801H217C226.941 129.801 235 121.742 235 111.801V22C235 12.0589 226.941 4 217 4Z"
                stroke="white"
                stroke-opacity="0.3"
                stroke-width="8"
              />
            </svg>
            <p>This hotel is like paradise! </p>
          </div>
          <div id="icon3">
            <svg
              width="215"
              height="124"
              viewBox="0 0 215 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 6H199C204.523 6 209 10.4772 209 16V90.3184C209 95.533 204.773 99.7603 199.558 99.7603C194.344 99.7603 190.116 103.988 190.116 109.202V113.904C190.116 117.385 185.978 119.205 183.413 116.852L168.79 103.442C166.208 101.074 162.832 99.7603 159.328 99.7603H16C10.4772 99.7603 6 95.2831 6 89.7603V16C6 10.4772 10.4772 6 16 6Z"
                fill="white"
                fill-opacity="0.8"
              />
              <path
                d="M16 3H199C206.18 3 212 8.8203 212 16V90.3184C212 97.1899 206.43 102.76 199.558 102.76C196 102.76 193.116 105.644 193.116 109.202V113.904C193.116 119.996 185.874 123.18 181.385 119.063L166.763 105.653C164.734 103.793 162.081 102.76 159.328 102.76H16C8.8203 102.76 3 96.94 3 89.7603V16C3 8.8203 8.8203 3 16 3Z"
                stroke="white"
                stroke-opacity="0.4"
                stroke-width="6"
              />
            </svg>

            <p>Extraordinary, very comfortable!</p>
          </div>
          <div id="icon4">
            <Img
              style={{ minWidth: "115px" }}
              fluid={data.heart2.childImageSharp.fluid}
            />
          </div>
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
                <span />
              </div>
              <label id="pay-wrapper" for="pay">
                <input type="checkbox" id="pay" value="pay" name="pay" />
                <span id="pay-icon"></span>Pay when checking in?
              </label>
              <br />
              <input
                type="submit"
                className="submit orange-btn"
                value="Search Hotel"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="right-banner">
        <div className="col-3">
          <Img
            className="mr-10"
            style={{ minWidth: "90px" }}
            fluid={data.heart.childImageSharp.fluid}
          />
          <h4 className="big">Take less than 1 Minutes to book a room</h4>
          <p>
            Suspendisse tristique porttitor vel iaculis iaculis nec imperdiet.
            Senectus risus nisi, eget vel sit faucibus praesent netus. Ut velit
            pellent porttitor vel iaculis iaculis
          </p>
        </div>
      </div>
      <div id="about-us">
        <div className="col-2">
          <div className="images">
            <Img
              className="rounded-xl"
              fluid={data.beach.childImageSharp.fluid}
              title="Beach"
              alt="Beach"
            />
            <div id="decoration">
              <Img fluid={data.dec.childImageSharp.fluid} />
            </div>
            <div id="orange">
              <Img fluid={data.orangeRoom.childImageSharp.fluid} />
            </div>
          </div>
          <div className="content">
            <h2>About Hotely</h2>
            <p>
              Semper sed neque quis tortor. Diam augue et lectus eget amet.
              Urna, non fermentum in in. Nulla sed vestibulum volutpat vitae,
              suspendisse porttitor. Augue consequat, eu dictum felis. Ipsum
              gravida fermentum vel lectus cursus. Purus arcu, fermentum in
            </p>
            <div className="points">
              <div>
                <h3>1.2k</h3>Hotel
              </div>
              <div>
                <h3>4.8k</h3>Rooms
              </div>
              <div>
                <h3>186</h3>Country
              </div>
            </div>

            <p>
              suspendisse porttitor. Augue consequat, eu dictum felis. Ipsum
              gravida fermentum vel lectus cursus. Purus arcu, fermentum in
              gravida{" "}
              <strong>
                <u>fermentum vel</u>
              </strong>{" "}
              lectus cursus. Purus arcu, fermentum in
            </p>
            <button className="orange-btn w-auto">Explore More</button>
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
    background: file(base: { eq: "hotel-main.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heart: file(base: { eq: "heart.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloud1: file(base: { eq: "cloud1.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cloud2: file(base: { eq: "cloud2.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    heart2: file(base: { eq: "heart2.png" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beach: file(base: { eq: "beach.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    orangeRoom: file(base: { eq: "orange-room.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dec: file(base: { eq: "decoration.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
