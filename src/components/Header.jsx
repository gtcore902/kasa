import { Link } from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';
import '../styles/Header.sass';

const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo Kasa" />
      <Link to="/">Accueil</Link>
      <Link to="about">A Propos</Link>
    </div>
  );
};

export default Header;
