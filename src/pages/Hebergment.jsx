import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Hebergment.sass';

const Hebergment = () => {
  const navigate = useNavigate();
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  let targetedHebergment = hebergments.filter(
    (element) => element.id === hebergmentId
  );
  // console.log(targetedHebergment.length > 0);
  // const hebergmentIdInt = parseInt(hebergmentId);
  // console.log(hebergments);
  // console.log(hebergmentId);
  // console.log(targetedHebergment[0]);

  if (targetedHebergment.length === 1) {
    return (
      <div className="hebergment-container">
        <div className="hebergment-container__slider">
          <img src={targetedHebergment[0].cover} alt="" />
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
                {targetedHebergment[0].host.name}
              </p>
              <img
                className="hebergment-container__header__picture"
                src={targetedHebergment[0].host.picture}
                alt=""
              />
            </div>
          </div>
          {/* Details container */}
          <div className="hebergment-container__details">
            {/* Tag name omponents here */}
          </div>
          <div className="hebergment-container__collapses">
            {/* Collapses components */}
          </div>
        </div>
      </div>
    );
  }
  return navigate('./error'); // Check here error
};

export default Hebergment;
