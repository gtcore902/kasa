import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Tag from '../components/Tag';
import greyStar from '../assets/grey-star.svg';
import redStar from '../assets/red-star.svg';
import '../styles/Hebergment.sass';

const Hebergment = () => {
  const navigate = useNavigate();
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  let targetedHebergment = hebergments.filter(
    (element) => element.id === hebergmentId
  );
  const nbStars = parseInt(targetedHebergment[0].rating);
  const range = [1, 2, 3, 4, 5];

  if (targetedHebergment.length === 1) {
    return (
      <div className="hebergment-container">
        <div className="hebergment-container__slider">
          <img
            src={targetedHebergment[0].cover}
            alt={targetedHebergment[0].title}
          />
        </div>
        <div className="hebergment-container__content">
          {/* Header container */}
          <div className="hebergment-container__header">
            <div>
              <h1 className="hebergment-container__header__title">
                {targetedHebergment[0].title}
              </h1>
              <p className="hebergment-container__header__location">
                {targetedHebergment[0].location}
              </p>
            </div>
            <div className="hebergment-container__header__host">
              <p className="hebergment-container__header__name">
                {targetedHebergment[0].host.name.split(' ')[0]}
                <br />
                {targetedHebergment[0].host.name.split(' ')[1]}
              </p>
              <img
                className="hebergment-container__header__picture"
                src={targetedHebergment[0].host.picture}
                alt={targetedHebergment[0].host.name}
              />
            </div>
          </div>
          {/* Details container */}
          <div className="hebergment-container__details">
            <div className="hebergment-container__details__tags">
              {targetedHebergment[0].tags.map((tag, index) => (
                <Tag key={index} tagName={tag} />
              ))}
            </div>
            <div className="hebergment-container__details__stars">
              {range.map((element) =>
                nbStars >= element ? (
                  <img
                    className="hebergment-container__details__star"
                    src={redStar}
                    alt="Etoile rouge"
                  />
                ) : null
              )}
              {range.map((element) =>
                nbStars < element ? (
                  <img
                    className="hebergment-container__details__star"
                    src={greyStar}
                    alt="Etoile grise"
                  />
                ) : null
              )}
            </div>
          </div>
          <div className="hebergment-container__collapses">
            {/* Collapses components */}
          </div>
        </div>
      </div>
    );
  }
  return navigate('./error'); // Check here error or warning in console
};

export default Hebergment;
