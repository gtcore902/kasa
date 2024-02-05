import React from 'react';
import '../styles/Banner.sass';

const Banner = ({ title, titleSpan, backgroundImage, altAttribute }) => {
  return (
    <div className="banner">
      <img className="banner__image" src={backgroundImage} alt={altAttribute} />
      {/* Check if h1 exists */}
      {title !== '' && (
        <h1 className="banner__title">
          {title}
          <span className="banner__span">{titleSpan}</span>
        </h1>
      )}
    </div>
  );
};

export default Banner;
