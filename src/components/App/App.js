import React, { useState, useEffect, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import { floors } from '../../data/gdData';
import { fetchName } from '../../data/apiCaller';
import { cleanNameData, getID } from '../../utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      floorData: floors,
      savedEncounters: [],
      error:'',
      encounterLists: {
        'theBell': {premade: [], random:[]}, //maybe saved encounters go here too
        'floor1': {premade: [], random:[]}
      }
    }
  }

  addEncounter = (newEncounter, floor, list) => {
    const newEncounterState = this.state.encounterLists;
    if (list === 'random') {
      newEncounterState[floor][list].push(newEncounter);
    } else {
      newEncounterState[floor][list] = newEncounter;
    }
    this.setState({ encounterLists: newEncounterState })
  }

  updateEncounter = (id, floor, list) => {
    const newEncounterState = this.state.encounterLists;
  }

  componentDidMount() {
    // fetchName()
    // .then((nameData) => {
    //   console.log(nameData.character.name);
    // });
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <Route
          exact path="/:floor"
          render={({ match })=> {
            return <Floor
            floorID={match.params.floor}
            floorName={this.state.floorData[match.params.floor].name}
            encounterData={this.state.floorData[match.params.floor].encounters}
            encounterList={this.state.encounterLists[match.params.floor]}
            addEncounter={this.addEncounter}
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
