import React from 'react';
import backgroundImg from '../assets/background-banner.svg';
import '../styles/Banner.sass';

const Banner = ({ title, titleSpan }) => {
  return (
    <div className="banner">
      <img className="banner__image" src={backgroundImg} alt="" />
      <h1 className="banner__title">
        {title}
        <span className="banner__span">{titleSpan}</span>
      </h1>
    </div>
  );
};

export default Banner;
