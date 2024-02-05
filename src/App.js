import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import * as datas from './datas/logements.json';

import Header from './components/Header';
import Home from './pages/Home';
import Hebergment from './pages/Hebergment';
import About from './pages/About';
import Error from './pages/Error';

// Create context and export
export const ThemeContext = createContext();

function App() {
  const [hebergments, setHebergments] = useState([]);
  // Set state with datas from logements.json
  console.log(hebergments);
  useEffect(() => {
    setHebergments(Array.from(datas));
    // console.log(hebergments);
  }, []);

  return (
    <ThemeContext.Provider value={hebergments}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hebergment/:hebergmentId" element={<Hebergment />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
