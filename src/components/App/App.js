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
        setDicePool(diceResponse);
      } catch (error) {

      }
  }

  useEffect(() => {
    buildDicePool();
  }, []);

  return (
    <main className='App'>
      <Header />
      <Floor />
    </main>
  )

}

export default App;
