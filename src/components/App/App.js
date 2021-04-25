import React, { useState, useEffect, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import Saved from '../Saved/Saved';
import { floors } from '../../data/gdData';
import { fetchName } from '../../data/apiCaller';
import { cleanNameData, getID } from '../../utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      floorData: floors,
      error:'',
      encounterLists: {
        'theBell': {saved: [], random:[]},
        'floor1': {saved: [], random:[]}
      }
    }
  }

  addEncounter = (newEncounter, floor, list) => {
    const newEncounterState = this.state.encounterLists;
    switch (list) {
      case 'random':
        newEncounterState[floor][list] = [newEncounter];
        break;
      case 'saved':
        newEncounterState[floor][list].push(newEncounter);
        break;
    }
    this.setState({ encounterLists: newEncounterState })
  }

  deleteEncounter = (encounter, id, floor) => {
    const encounterState = this.state.encounterLists
    const newEncounterState = encounterState[floor].saved.filter(encounter => encounter.id !== id);
    this.setState({ encounterLists: newEncounterState });
    console.log(this.state.encounterLists)
  }

  componentDidMount() {
    // console.log(fetchName().character.name)
    // .then((nameData) => {
    //   console.log(nameData.character.name);
    // // });
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <Switch >
          <Route
            exact path="/saved"
            render={() => {
              return <Saved
                encounterLists={this.state.encounterLists}
                deleteEncounter={this.deleteEncounter}
              />}}
          />
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
        </Switch>
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
