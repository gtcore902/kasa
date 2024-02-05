import { Link } from 'react-router-dom';
import logo from '../assets/logo_kasa.svg';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Logo Kasa" />
      <Link to="/">Accueil</Link>
      <Link to="about">A Propos</Link>
    </div>
  );
};

export default Header;
