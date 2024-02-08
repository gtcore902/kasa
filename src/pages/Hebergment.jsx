import { ThemeContext } from '../App';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import greyStar from '../assets/grey-star.svg';
import redStar from '../assets/red-star.svg';
import '../styles/Hebergment.sass';

const Hebergment = () => {
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  // console.log(hebergmentId);
  let target = hebergments.filter((element) => element.id === hebergmentId);
  // console.log(target);
  const [targetedHebergment] = useState(target);
  const [sliderArray, setSliderArray] = useState([]);
  const [currentPicture, setCurrentPicture] = useState();
  const [length] = useState(targetedHebergment[0].pictures.length);
  const [index, setIndex] = useState(1);
  // const navigate = useNavigate();
  const [nbStars, setNbStars] = useState();

  useEffect(() => {
    setCurrentPicture(targetedHebergment[0].pictures[0]);
  }, []);
  // console.log(currentPicture);

  useEffect(() => {
    setSliderArray(targetedHebergment[0].pictures);
    // console.log(index);
  }, []);

  // Increase index image on click on the right arrow
  const increaseImageIndex = () => {
    const thisElement = sliderArray.indexOf(currentPicture);
    if (thisElement === sliderArray.length - 1) {
      setCurrentPicture(sliderArray[0]);
      setIndex(1);
    } else {
      setCurrentPicture(sliderArray[thisElement + 1]);
      setIndex(index + 1);
    }
    // console.log(thisElement);
  };

  // Decrease index image on click on the left arrow
  const decreaseImageIndex = () => {
    const thisElement = sliderArray.indexOf(currentPicture);
    if (thisElement === 0) {
      setCurrentPicture(sliderArray[sliderArray.length - 1]);
      setIndex(sliderArray.length);
    } else {
      setCurrentPicture(sliderArray[thisElement - 1]);
      setIndex(index - 1);
    }
    // console.log(thisElement);
  };

  useEffect(() => {
    if (targetedHebergment.length === 1) {
      setNbStars(targetedHebergment[0].rating);
    }
  }, [targetedHebergment]);

  const [range] = useState([1, 2, 3, 4, 5]);

  if (targetedHebergment.length === 1) {
    return (
      <div>
        <div className="hebergment-container">
          <Slider
            src={currentPicture}
            alt={targetedHebergment[0].title}
            increaseImageIndex={increaseImageIndex}
            decreaseImageIndex={decreaseImageIndex}
            index={index}
            length={length}
          />
          {/* <img
              src={targetedHebergment[0].cover}
              alt={targetedHebergment[0].title}
            /> */}
          <div className="">
            {/* Header container */}
            <div className="hebergment-container__content">
              <div className="hebergment-container__header">
                <div>
                  <h1 className="hebergment-container__header__title">
                    {targetedHebergment[0].title}
                  </h1>
                  <p className="hebergment-container__header__location">
                    {targetedHebergment[0].location}
                  </p>
                </div>
                <div className="hebergment-container__header__tags">
                  {targetedHebergment[0].tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                  ))}
                </div>
              </div>
              {/* Details container */}
              <div className="hebergment-container__details">
                <div className="hebergment-container__details__host">
                  <p className="hebergment-container__details__name">
                    {targetedHebergment[0].host.name.split(' ')[0]}
                    <br />
                    {targetedHebergment[0].host.name.split(' ')[1]}
                  </p>
                  <img
                    className="hebergment-container__details__picture"
                    src={targetedHebergment[0].host.picture}
                    alt={targetedHebergment[0].host.name}
                  />
                </div>

                <div className="hebergment-container__details__stars">
                  {range.map((element, index) =>
                    nbStars >= element ? (
                      <img
                        key={index}
                        className="hebergment-container__details__star"
                        src={redStar}
                        alt="Etoile rouge"
                      />
                    ) : null
                  )}
                  {range.map((element, index) =>
                    nbStars < element ? (
                      <img
                        key={index}
                        className="hebergment-container__details__star"
                        src={greyStar}
                        alt="Etoile grise"
                      />
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <div className="hebergment-container__collapses">
              {/* Collapses components */}
              <Collapse
                title="Description"
                content={targetedHebergment[0].description}
              />
              <Collapse
                // className="collapse__title--small"
                title="Equipements"
                content={
                  <ul>
                    {targetedHebergment[0].equipments.map((element, index) => {
                      return <li key={index}>{element}</li>;
                    })}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="../../error" />;
  }
};

export default Hebergment;
