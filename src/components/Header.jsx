import { Link } from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';
import '../styles/Header.sass';

const Header = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo Kasa" />
      <div className="navbar__box">
        <Link to="/">Accueil</Link>
        <Link to="about">A Propos</Link>
      </div>
    </div>
  );
};

export default Header;
