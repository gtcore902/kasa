import { Link } from 'react-router-dom';
import '../styles/Card.sass';

const Card = ({ title, id, cover }) => {
  return (
    <Link key={id} className="card-link" to={`/hebergment/${id}`}>
      <div className="card-link__box">
        <img className="card-link__picture" src={cover} alt={title} />
        <h3 className="card-link__title">{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
