import Banner from '../components/Banner';
import Cards from '../components/Cards';
const Home = () => {
  const titleContent = 'Chez vous, ';
  const titleSpan = 'partout et ailleurs';

  return (
    <div className="main">
      <Banner title={titleContent} titleSpan={titleSpan} />
      <Cards />
    </div>
  );
};

export default Home;
