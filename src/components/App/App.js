import React, { useState, useEffect, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import { floors, backUpDice } from '../../data/gdData';
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

  componentDidMount() {
    fetchDice()
      .then((diceData) => {
        const newDicePool = cleanDiceData(diceData);
        console.log(newDicePool);
        this.setState({dicePool: shuffleItems(newDicePool)});
      })
      .catch((err) => {
        this.setState({dicePool: backUpDice});
      })
  };



  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          exact path="/:floor"
          render={({ match })=> {
            {console.log(match.params.floor)}
            return <Floor
            floorName={this.state.floorData[match.params.floor].name}
            dice={this.state.dicePool}
            encounters={this.state.floorData[match.params.floor].encounters}
            />}}
          />

      </main>
    )

  }

}

export default App;





// <Route
// exact path="/:artPieceID"
// render={({ match }) => {
//   return <Floor id={match.params.artPieceID} />}}
//   />
