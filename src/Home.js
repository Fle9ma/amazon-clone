import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2017/img/Books/XCM_1078138_Manual_1500x375_1078138_us_books_100_books_evergreen_17_1500x375_R3_jpg_100_Books_Evergreen.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="38646970"
            title="Pro React 16"
            price={37.86}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61aBIWNwauL.jpg"
          />
          <Product
            id="47411027"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={27.65}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/519rgWOYPjL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="69212745"
            title="Learning React: Modern Patterns for Developing React Apps"
            price={39.21}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL.jpg"
          />
          <Product
            id="67346131"
            title="React js: Unmatched power for building fast and secure apps"
            price={16.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/414sv9LEkSL.jpg"
          />
          <Product
            id="28026030"
            title="Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker"
            price={27.19}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41q4NK-yIAL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="54463902"
            title="React Explained: Your Step-by-Step Guide to React (2020 Edition)"
            price={25.72}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/413n6ZDm0ZL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
