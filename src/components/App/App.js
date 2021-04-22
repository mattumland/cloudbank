import React, { useState, useEffect, Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import { floors } from '../../data/gdData';
import { fetchDice } from '../../data/apiCaller';
import { cleanDiceData } from '../../utilities'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dicePool: [],
      floorData: floors,
      savedEncounters: [],
      error:''
    }
  }


  // buildDicePool = () => {
  //   fetchDice()
  //     .then((diceData) => {
  //       const newDicePool = cleanDiceData(diceData);
  //       this.setState({dicePool: newDicePool});
  //     })
  //     .catch(err => this.setState((error: 'There was a problem with the dice roll')))
  //   };


  componentDidMount() {
    fetchDice()
      .then((diceData) => {
        const newDicePool = cleanDiceData(diceData);
        console.log(newDicePool);
        this.setState({dicePool: newDicePool});
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <Floor

        />
      </main>
    )

  }

}

export default App;
