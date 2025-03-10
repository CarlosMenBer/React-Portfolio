import React from 'react';
import "./home.css";
import Social from './Social';
import ScrollDown from './ScrollDown';
import Data from "./Data"

const Home1 = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" aria-label="Profile Image"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};
export default Home1