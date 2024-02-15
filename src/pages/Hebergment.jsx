import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datas from '../datas/logements.json';
import Slider from '../components/Slider';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import greyStar from '../assets/grey-star.svg';
import redStar from '../assets/red-star.svg';
import '../styles/Hebergment.sass';

const Hebergment = () => {
  let { hebergmentId } = useParams();
  const navigate = useNavigate();
  const [hebergments, setHebergments] = useState([]);
  const [targetedHebergment, setTragetedHebergment] = useState([]);
  const [hebergmentSections] = useState(true);
  const [sliderArray, setSliderArray] = useState([]);
  const [currentPicture, setCurrentPicture] = useState();
  const [length, setLength] = useState(0);
  const [index, setIndex] = useState(1);
  const [nbStars, setNbStars] = useState();
  const [range] = useState([1, 2, 3, 4, 5]);
  const [equipements, setEquipements] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setHebergments(datas);
  }, []);

  // Check if herbgmentId is in datas
  const isValidHebergmentId = datas.some(
    (element) => element.id === hebergmentId
  );

  // If id is not in datas redirect
  useEffect(() => {
    !isValidHebergmentId && navigate('/error');
  }, []);

  useEffect(() => {
    setTragetedHebergment(
      hebergments.filter((element) => element.id === hebergmentId)
    );
  }, [hebergments]);

  useEffect(() => {
    setSliderArray(...targetedHebergment.map((element) => element.pictures));
  }, [targetedHebergment]);

  useEffect(() => {
    setNbStars(targetedHebergment.map((element) => element.rating));
  }, [targetedHebergment]);

  useEffect(() => {
    setCurrentPicture(
      ...targetedHebergment.map((element) => element.pictures[0])
    );
  }, [targetedHebergment]);

  useEffect(() => {
    setLength(targetedHebergment.map((element) => element.pictures.length));
  }, [targetedHebergment]);

  useEffect(() => {
    setEquipements(targetedHebergment.map((element) => element.equipments));
  }, [targetedHebergment]);

  useEffect(() => {
    setTags(targetedHebergment.map((element) => element.tags));
  }, [targetedHebergment]);

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
  };

  return (
    <div>
      <div className="hebergment-container">
        <Slider
          src={currentPicture}
          alt={targetedHebergment.map((element) => element.title)}
          increaseImageIndex={increaseImageIndex}
          decreaseImageIndex={decreaseImageIndex}
          index={index}
          length={length}
        />
        <div className="">
          <div className="hebergment-container__content">
            <div className="hebergment-container__header">
              <div>
                <h1 className="hebergment-container__header__title">
                  {targetedHebergment.map((element) => element.title)}
                </h1>
                <p className="hebergment-container__header__location">
                  {targetedHebergment.map((element) => element.location)}
                </p>
              </div>
              <div className="hebergment-container__header__tags">
                {tags.map((element, index) =>
                  element.map((tag, index) => {
                    return <Tag key={index} tagName={tag} />;
                  })
                )}
              </div>
            </div>
            <div className="hebergment-container__details">
              <div className="hebergment-container__details__host">
                <p className="hebergment-container__details__name">
                  {targetedHebergment.map(
                    (element) => element.host.name.split(' ')[0]
                  )}
                  <br />
                  {targetedHebergment.map(
                    (element) => element.host.name.split(' ')[1]
                  )}
                </p>
                <img
                  className="hebergment-container__details__picture"
                  src={targetedHebergment.map(
                    (element) => element.host.picture
                  )}
                  alt={targetedHebergment.map((element) => element.host.name)}
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
            <Collapse
              hebergmentSections={hebergmentSections}
              title="Description"
              content={targetedHebergment.map((element) => element.description)}
            />
            <Collapse
              hebergmentSections={hebergmentSections}
              title="Equipements"
              content={
                <ul>
                  {equipements.map((element, index) =>
                    element.map((equipement, index) => {
                      return <li key={index}>{equipement}</li>;
                    })
                  )}
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hebergment;
