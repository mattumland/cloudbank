import React, { useState, useEffect, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import { floors } from '../../data/gdData';
import { fetchName } from '../../data/apiCaller';
import { cleanNameData } from '../../utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      floorData: floors,
      savedEncounters: [],
      error:''
    }
  }


  componentDidMount() {
    fetchName()
    .then((nameData) => {
      console.log(nameData.character.name);
    });


    // fetchDice()
    //   .then((diceData) => {
    //     const newDicePool = cleanDiceData(diceData);
    //     this.setState({dicePool: shuffleItems(newDicePool)});
    //   })
    //   .catch((err) => {
    //     this.setState({dicePool: backUpDice});
    //   })
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          exact path="/:floor"
          render={({ match })=> {
            return <Floor
            floorName={this.state.floorData[match.params.floor].name}
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
