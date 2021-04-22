import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import { floors } from '../../data/gdData';
import { fetchDice } from '../../data/apiCaller';


const App = () => {
  const [dicePool, setDicePool] = useState([]);

  const buildDicePool = async () => {
      try {
        const diceResponse = await fetchDice();
        return diceResponse;
      } catch (error) {

      }
  }




  useEffect(() => {
    setDicePool(buildDicePool());
    console.log(dicePool);
  }, []);

  return (
    <main>
      <h1>'SUP'</h1>
    </main>
  )

}

export default App;
