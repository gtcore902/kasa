import seaBackground from '../assets/background-banner.svg';

import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home = () => {
  const titleContent = 'Chez vous, ';
  const titleSpan = 'partout et ailleurs';

  return (
    <div className="main">
      <Banner
        title={titleContent}
        titleSpan={titleSpan}
        backgroundImage={seaBackground}
        altAttribute="Illustration bord de mer escarpé"
      />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
