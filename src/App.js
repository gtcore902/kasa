import { useEffect, useState, createContext } from 'react';
import * as datas from './datas/logements.json';
import Router from './components/Router';

// Create context and export
export const ThemeContext = createContext();

function App() {
  const [hebergments, setHebergments] = useState([]);
  // Set state with datas from logements.json
  useEffect(() => {
    setHebergments(Array.from(datas));
    // console.log(hebergments);
  }, []);

  return (
    <ThemeContext.Provider value={hebergments}>
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;
