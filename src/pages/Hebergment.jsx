import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Error from './Error';
import greyStar from '../assets/grey-star.svg';
import redStar from '../assets/red-star.svg';
import '../styles/Hebergment.sass';

const Hebergment = () => {
  let { hebergmentId } = useParams();
  const [hebergments, setHebergments] = useState([]);
  const [targetedHebergment, setTragetedHebergment] = useState([]);
  const [hebergmentSections] = useState(true);
  const [sliderArray, setSliderArray] = useState([]);
  const [currentPicture, setCurrentPicture] = useState();
  const [length, setLength] = useState();
  const [index, setIndex] = useState(1);
  const [nbStars, setNbStars] = useState();
  const [range] = useState([1, 2, 3, 4, 5]);
  const [title, setTitle] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  // Fetch datas
  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const response = await fetch('../../datas/logements.json');
      const datas = await response.json();
      setHebergments(datas);
      // datas.filter((element) => element.id === hebergmentId)
      setTragetedHebergment(
        datas.filter((element) => element.id === hebergmentId)
      );
      // console.log(targetedHebergment);
      // setSliderArray(targetedHebergment[0].pictures);
      // setLength(targetedHebergment[0].pictures.length);
      // setNbStars(targetedHebergment[0].rating);
      console.log(hebergments);
      console.log(targetedHebergment);
      if (response.status !== 200) {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(hebergments);
    console.log(
      targetedHebergment.id !== hebergmentId && console.log('not match')
    );
  }, []);

  useEffect(() => {
    targetedHebergment.map(
      (element) => (
        setTitle(element.title),
        setLocation(element.location),
        setDescription(element.description)
      )
    );
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

  // if (targetedHebergment.length !== 0) {
  // return (
  //   <p>
  //     Titre : {title} Location: {location} Description: {description}
  //   </p>
  // );

  return (
    // <p>
    //   {targetedHebergment.map((element) => (
    //     <p>{element.title}</p>
    //   ))}
    //   + test
    // </p>

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
                {targetedHebergment.map((tag, index) => (
                  <Tag key={index} tagName={tag.tags} />
                ))}
              </div>
            </div>
            <div className="hebergment-container__details">
              <div className="hebergment-container__details__host">
                <p className="hebergment-container__details__name">
                  {/* {targetedHebergment[0].host.name.split(' ')[0]} */}
                  <br />
                  {/* {targetedHebergment[0].host.name.split(' ')[1]} */}
                </p>
                <img
                  className="hebergment-container__details__picture"
                  // src={targetedHebergment[0].host.picture}
                  // alt={targetedHebergment[0].host.name}
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
              hebergmentSections={hebergmentSections}
              title="Description"
              content={targetedHebergment.map((element) => element.description)}
            />
            <Collapse
              hebergmentSections={hebergmentSections}
              title="Equipements"
              content={
                <ul>
                  {targetedHebergment.map((element, index) => {
                    return <li key={index}>{element.equipments}</li>;
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
};
// } else {
//   // return <Navigate to="../../error" />;
//   return <p>error</p>;
//   // return <Error />;
// }
export default Hebergment;
