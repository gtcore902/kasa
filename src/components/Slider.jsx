import arrow from '../assets/slider-arrow.svg';

const Slider = ({
  src,
  alt,
  increaseImageIndex,
  decreaseImageIndex,
  index,
  length,
}) => {
  return (
    <div className="hebergment-container__slider">
      {/* If picture array contains more than one element display left arrow */}
      {length > 1 && (
        <div
          className="hebergment-container__slider__arrow hebergment-container__slider__arrow--left"
          onClick={decreaseImageIndex}
        >
          <img
            className="hebergment-container__slider__arrow__img"
            src={arrow}
            alt="Flèche de gauche"
          />
        </div>
      )}
      {/* If picture array contains more than one element display right arrow */}
      {length > 1 && (
        <div
          className="hebergment-container__slider__arrow hebergment-container__slider__arrow--right"
          onClick={increaseImageIndex}
        >
          <img
            className="hebergment-container__slider__arrow__img"
            src={arrow}
            alt="Flèche de droite"
          />
        </div>
      )}
      {/* If picture array contains more than one element display counter  */}
      {length > 1 && (
        <div className="hebergment-container__slider__counter">
          {index}/{length}
        </div>
      )}
      <img
        className="hebergment-container__slider__image"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Slider;
