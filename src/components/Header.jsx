import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';
import '../styles/Header.sass';

const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  // const toggleClass = () => {
  //   setIsActive(true);
  // };
  // console.log(window.location.href.charAt(window.location.href.length - 1));
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo Kasa" />
      <div className="navbar__box">
        <Link
          className="navbar__link"
          to="/"
          // onClick={toggleClass}
        >
          {' '}
          {/* Set underline system*/}
          Accueil
        </Link>
        <Link className="navbar__link" to="/about">
          A Propos
        </Link>
      </div>
    </div>
  );
};

export default Header;
