import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Hebergment from '../pages/Hebergment';
import About from '../pages/About';
import Error from '../pages/Error';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hebergment/:hebergmentId" element={<Hebergment />} />
          <Route path="/hebergment/*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
