import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Hebergment = () => {
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  // const hebergmentIdInt = parseInt(hebergmentId);
  console.log(hebergments);
  console.log(hebergmentId);

  return <div>Hébergement : {hebergmentId}</div>;
};

export default Hebergment;
