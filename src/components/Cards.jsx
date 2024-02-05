import '../styles/Cards.sass';
import { useEffect, useState } from 'react';
import * as datas from '../datas/logements.json';
import Card from './Card';

const Cards = () => {
  const [hebergments, setHebergments] = useState([]);
  // Set state with datas from logements.json
  useEffect(() => {
    setHebergments(Array.from(datas));
    // console.log(hebergments.length);
  }, []);
  return (
    <div className="card-container">
      {hebergments.map(({ title, id }) => (
        <Card title={title} key={id} id={id} />
      ))}
    </div>
  );
};

export default Cards;
