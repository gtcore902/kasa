import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Error.sass';

const Error = () => {
  return (
    <div className="error-container">
      <p className="error-container__code">404</p>
      <p className="error-container__content">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error-container__link" to="./">
        Retourner à la page d'accueil
      </Link>
      <Footer />
    </div>
  );
};

export default Error;
