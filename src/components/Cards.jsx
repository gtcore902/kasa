import '../styles/Card.sass';
import { useEffect, useState } from 'react';
import * as datas from '../datas/logements.json';

const Cards = () => {
  const [hebergements, setHebergments] = useState([]);
  // Set state with datas from logements.json
  useEffect(() => {
    setHebergments(datas);
    // console.log(hebergements[0].title);
  }, []);
  return <div className="card-container"></div>;
};

export default Cards;
