import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import DefaultSEO from "@/components/DefaultSEO";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/main.scss";
import Stars from "@/components/Stars";

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
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="#find-hotel">Find Hotel</Link>
            </li>
            <li>
              <Link to="#about-us">About Us</Link>
            </li>
            <li>
              <Link to="#contact-us">Contact Us</Link>
            </li>
            <li className="login">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div id="home">
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
                strokeOpacity="0.3"
                strokeWidth="8"
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
                fillOpacity="0.8"
              />
              <path
                d="M16 3H199C206.18 3 212 8.8203 212 16V90.3184C212 97.1899 206.43 102.76 199.558 102.76C196 102.76 193.116 105.644 193.116 109.202V113.904C193.116 119.996 185.874 123.18 181.385 119.063L166.763 105.653C164.734 103.793 162.081 102.76 159.328 102.76H16C8.8203 102.76 3 96.94 3 89.7603V16C3 8.8203 8.8203 3 16 3Z"
                stroke="white"
                strokeOpacity="0.4"
                strokeWidth="6"
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
              <label htmlFor="guests-select">Guest</label>
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
              <label id="pay-wrapper" htmlFor="pay">
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
      <div className="featured">
        <div className="col-3">
          <Img
            className="lg:mr-10"
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
              className="rounded-xl w-full"
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
      <div className="bg-green-bg w-full">
        <div id="sanghai">
          <div className="col-left">
            <h2>Sanghai Hotel</h2>
            <span className="subtext">Sanghai, China</span>
            <p>
              Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida
              integer tincidunt pretium dis fames porttitor velit. Volutpat
              tincidunt{" "}
            </p>
            <button className="orange-btn">Book Now</button>
            <div className="not-btn">
              <span>$50</span>/Night
            </div>
          </div>
          <div className="col-right">
            <Img
              className="pic"
              fluid={data.sanghai.childImageSharp.fluid}
            ></Img>
          </div>
        </div>
        <div id="blue-box-wrapper">
          <div className="decor">
            <Img fluid={data.dec.childImageSharp.fluid} />
          </div>
          <div id="blue-box">
            <p>
              Convallis posuere nec convallis nec porta eleifend. Nam ornare sit
              pellentesque sapien senectus viverra vitae.
            </p>
            <h5>Robert Rene</h5>
          </div>
        </div>
      </div>
      <div id="find-hotel">
        <div className="wrapper">
          <h2>Find your best hotel</h2>
          <p>
            Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida
            integer tincidunt pretium dis fames porttitor velit. Volutpat
            tincidunt{" "}
          </p>
          <button className="orange-btn">View All</button>
        </div>
        <div className="cards">
          <Link to="/hotel-de-luna" className="card">
            <Img
              title="Hotel De'Luna"
              alt="Hotel De'Luna"
              className="card-img"
              fluid={data.pool.childImageSharp.fluid}
            />
            <div className="text-box">
              <h3>Hotel De'Luna</h3>
              <p>Singapore</p>
            </div>
          </Link>
          <Link to="/ina-tretes-hotel" className="card blue">
            <Img
              title="Ina Tretes Hotel"
              alt="Ina Tretes Hotel"
              className="card-img"
              fluid={data.sanghai.childImageSharp.fluid}
            />
            <div className="text-box">
              <h3>Ina Tretes Hotel</h3>
              <p>Singapore</p>
            </div>
          </Link>
          <Link to="/de-light-hotel" className="card">
            <Img
              title="De'light Hotel"
              alt="De'light Hotel"
              className="card-img"
              fluid={data.beach.childImageSharp.fluid}
            />
            <div className="text-box">
              <h3>De'light Hotel</h3>
              <p>Singapore</p>
            </div>
          </Link>
          <Link to="/mercusuar-tower" className="card">
            <Img
              title="Mercusuar Tower"
              alt="Mercusuar Tower"
              className="card-img"
              fluid={data.tower.childImageSharp.fluid}
            />
            <div className="text-box">
              <h3>Mercusuar Tower</h3>
              <p>Singapore</p>
            </div>
          </Link>
        </div>
      </div>
      <div id="opinion">
        <div className="box">
          <div className="col-1">
            <Img
              className="pic rounded-xl"
              fluid={data.landscape.childImageSharp.fluid}
            />
          </div>
          <div className="col-2">
            <h3>Robert Rene</h3>
            <span className="subtext text-white">Singapore</span>
            <p>
              Aliquet tincidunt urna congue lectus sodales volutpat, in
              venenatis. In pellentesque est iaculis tortor proin eleifend ipsum
              nunc, sed. At malesuada fusce egestas placerat diam justo. At
              arcu, arcu tempor ultrices scelerisque tempus consequat.
            </p>
            <Stars fill="4" className="rate" />
          </div>
        </div>
      </div>
      <footer>
        <div id="contact-us">
          <div className="col-1">
            <h3>
              Hote<span>ly</span>
            </h3>
            <p>
              Nunc, lobortis cras vulputate faucibus dictumst. Viverra sit nec
              pellentesque mattis. Ipsum amet nunc bibendum ut. Aliquam ut lorem{" "}
            </p>
          </div>
          <div className="col-2">
            <h3>Navigation</h3>
            <Link to="#home">
              <p>Home</p>
            </Link>
            <Link to="#find-hotel">
              <p>Find Hotel</p>
            </Link>
            <Link to="#about-us">
              <p>About Us</p>
            </Link>
            <Link to="#contact-us">
              <p>Contact Us</p>
            </Link>
          </div>
          <div className="col-3">
            <h3>Contact Us</h3>
            <p>+62 123 123981</p>
            <p>info@hotely.com</p>
            <p>hotely.com</p>
          </div>
        </div>
        <div id="bottom">
          <div className="left">
            Designed by: Clean-Commit, coded by: Jakub Piskorz
          </div>
          <div className="right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="#273029"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0002 11.3698C16.1236 12.2021 15.9815 13.052 15.594 13.7988C15.2065 14.5456 14.5933 15.1512 13.8418 15.5295C13.0903 15.9077 12.2386 16.0394 11.408 15.9057C10.5773 15.7721 9.80996 15.3799 9.21503 14.785C8.62011 14.1901 8.22793 13.4227 8.09426 12.592C7.9606 11.7614 8.09226 10.9097 8.47052 10.1582C8.84878 9.40667 9.45438 8.79355 10.2012 8.40605C10.948 8.01856 11.7979 7.8764 12.6302 7.99981C13.4791 8.1257 14.265 8.52128 14.8719 9.12812C15.4787 9.73496 15.8743 10.5209 16.0002 11.3698Z"
                stroke="#273029"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="#273029"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#273029"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z"
                stroke="#273029"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </footer>
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

// Warning: spaghetti code. My graphql knowledge is pretty basic,
// but if I can query it easier, please let me know.
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
    sanghai: file(base: { eq: "sanghai.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pool: file(base: { eq: "pool.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tower: file(base: { eq: "tower.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    landscape: file(base: { eq: "landscape.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
