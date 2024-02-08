import { useEffect, useState, createContext } from 'react';
// import * as datas from './datas/logements.json';
import Router from './components/Router';

// Create context and export
export const ThemeContext = createContext();

function App() {
  const [hebergments, setHebergments] = useState([]);
  // Set state with datas from logements.json
  // useEffect(() => {
  //   setHebergments(Array.from(datas));
  //   // console.log(hebergments);
  // }, []);

  // test
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
    <ThemeContext.Provider value={hebergments}>
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;
