import React from "react";

import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
QUAADTNA          
      </h1>
          <p className="primary-text">
          Savor the spirit ofExperience the essence of Ramadan at our restaurant with
           a warm iftar gathering. Enjoy a diverse selection of traditional dishes 
           crafted to delight your senses and foster
           togetherness. Join us as we share in the joy of this sacred month.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
