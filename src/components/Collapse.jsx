import { useState } from 'react';
import arrow from '../assets/arrow.png';
import '../styles/Collapse.sass';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  const toggleClass = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    isRotate ? setIsRotate(false) : setIsRotate(true);
  };
  return (
    <div className="collapse">
      <h2 className="collapse__title" onClick={toggleClass}>
        {title}
        <img
          className={
            isRotate
              ? 'collapse__arrow collapse__arrow--isRotate'
              : 'collapse__arrow'
          }
          src={arrow}
          alt="Flèche d'ouverture et de fermeture"
        />
      </h2>
      <p
        className={
          isOpen
            ? 'collapse__content collapse__content--isOpen'
            : 'collapse__content'
        }
      >
        {content}
      </p>
    </div>
  );
};

export default Collapse;
