import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Hebergment = () => {
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  let hebergmentTarget = [];
  // const hebergmentIdInt = parseInt(hebergmentId);
  console.log(hebergments);
  console.log(hebergmentId);

  return (
    <div>
      Hébergement : {hebergmentId}
      {/* Todo if id is undefined */}
      {hebergments.map((element) =>
        element.id === hebergmentId ? (
          <p key={element.id}>
            {element.id} : {element.title}
          </p>
        ) : null
      )}
    </div>
  );
};

export default Hebergment;
