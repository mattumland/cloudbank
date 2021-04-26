import React, { useState, useEffect, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Floor from '../Floor/Floor';
import Saved from '../Saved/Saved';
import Test from '../Test/Test';
import Message from '../Message/Message';
import { floors } from '../../data/gdData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      floorData: floors,
      error:'',
      encounterLists: {
        'theBell': {saved: [], random:[]},
        'floor1': {saved: [], random:[]},
        'floor2': {saved: [], random:[]},
        'floor3.1': {saved: [], random:[]},
        'floor3.2': {saved: [], random:[]},
        'floor3.3': {saved: [], random:[]},
        'floor3.4': {saved: [], random:[]},
        'floor3.5': {saved: [], random:[]},
        'floor3.6': {saved: [], random:[]},
        'floor3.7': {saved: [], random:[]},
        'floor4': {saved: [], random:[]},
        'floor6': {saved: [], random:[]}
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
        if (!newEncounterState[floor][list].includes(newEncounter)) {
          newEncounterState[floor][list].push(newEncounter);
        }
        break;
    }
    this.setState({ encounterLists: newEncounterState })
  }

  deleteEncounter = (encounter, id, floor) => {
    const newEncounterState = this.state.encounterLists
    const savedList = newEncounterState[floor].saved;
    const newSavedList = savedList.filter(encounter => encounter.id !== id);
    newEncounterState[floor].saved = newSavedList
    this.setState({ encounterLists: newEncounterState });
  }

  componentDidMount() {
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <Switch >
          <Route
            exact path="/test"
            render={() => {
              return <Test
                encounter={this.state.floorData.theBell.encounters['08']}
              />}}
          />

          <Route
            exact path="/saved"
            render={() => {
              return <Saved
                encounterLists={this.state.encounterLists}
                deleteEncounter={this.deleteEncounter}
              />}}
          />

          <Route
            exact path="/:page"
            render={({ match })=> {
              return <Floor
                floorID={match.params.page}
                floorName={this.state.floorData[match.params.page].name}
                encounterData={this.state.floorData[match.params.page].encounters}
                encounterList={this.state.encounterLists[match.params.page]}
                addEncounter={this.addEncounter}
              />}}
            />

          <Route
            render={() => {
              return <Message
                error={this.state.error}
              />}}
          />

        </Switch>
      </main>
    )
  }
}

export default App;
