import logo from '../assets/logo_kasa.svg';
import '../styles/Footer.sass';

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src={logo}
        alt="Illustration chaîne de montagne"
      />
      <p className="footer__content">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
