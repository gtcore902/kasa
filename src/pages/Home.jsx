import Banner from '../components/Banner';
const Home = () => {
  const titleContent = 'Chez vous, ';
  const titleSpan = 'partout et ailleurs';

  return (
    <div className="main">
      <Banner title={titleContent} titleSpan={titleSpan} />
    </div>
  );
};

export default Home;
