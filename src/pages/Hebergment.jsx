import { ThemeContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Hebergment = () => {
  const hebergments = useContext(ThemeContext);
  let { hebergmentId } = useParams();
  let targetedHebergment = hebergments.filter(
    (element) => element.id === hebergmentId
  );
  // const hebergmentIdInt = parseInt(hebergmentId);
  console.log(hebergments);
  console.log(hebergmentId);
  console.log(targetedHebergment[0]);

  return (
    <div>
      {/* Todo if id is undefined */}
      Hébergement {targetedHebergment[0].id} : {targetedHebergment[0].title}
      {/* {hebergments.map((element) =>
        element.id === hebergmentId ? (
          <p key={element.id}>
            {element.id} : {element.title}
          </p>
        ) : null
      )} */}
    </div>
  );
};

export default Hebergment;
