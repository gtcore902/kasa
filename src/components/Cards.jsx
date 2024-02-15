import { useState, useEffect } from 'react';
import '../styles/Cards.sass';
import Card from './Card';

const Cards = () => {
  const [hebergments, setHebergments] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const response = await fetch('./datas/logements.json');
        const datas = await response.json();
        setHebergments(datas);
        if (response.status !== 200) {
          console.log(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatas();
  }, []);

  return (
    <div className="card-container">
      {hebergments.map(({ title, id, cover }) => (
        <Card title={title} key={id} id={id} cover={cover} />
      ))}
    </div>
  );
};

export default Cards;
