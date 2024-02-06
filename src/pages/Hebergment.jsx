import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Hebergment = () => {
  const navigate = useNavigate();
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  let targetedHebergment = hebergments.filter(
    (element) => element.id === hebergmentId
  );
  // console.log(targetedHebergment.length > 0);
  // const hebergmentIdInt = parseInt(hebergmentId);
  // console.log(hebergments);
  // console.log(hebergmentId);
  // console.log(targetedHebergment[0]);

  if (targetedHebergment.length === 1) {
    return (
      <div>
        Hébergement {targetedHebergment[0].id} : {targetedHebergment[0].title}
      </div>
    );
  }
  return navigate('./error'); // Check here
};

export default Hebergment;
