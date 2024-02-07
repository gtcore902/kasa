//import '../styles/Hebergment.sass';

const Slider = ({ src, alt, updateDisplayedPicture }) => {
  return (
    <div className="hebergment-container__slider">
      <img src={src} alt={alt} onClick={updateDisplayedPicture} />
    </div>
  );
};

export default Slider;
