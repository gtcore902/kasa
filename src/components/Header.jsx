import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';
import '../styles/Header.sass';

const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  // const toggleClass = () => {
  //   setIsActive(true);
  // };

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo Kasa" />
      <div className="navbar__box">
        <Link className="navbar__link" to="/">
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
