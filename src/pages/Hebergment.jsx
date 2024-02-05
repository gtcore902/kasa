import { useParams } from 'react-router-dom';

const Hebergment = () => {
  let { hebergmentId } = useParams();
  // const hebergmentIdInt = parseInt(hebergmentId);
  // console.log(hebergmentId);

  return <div>Hébergement : {hebergmentId}</div>;
};

export default Hebergment;
