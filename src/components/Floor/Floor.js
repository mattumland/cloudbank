import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, formatIndex, rollDice, d100, formatRoll, addDice } from '../../utilities';

const Floor = ({ floorID, floorName, encounterData, encounterList, addEncounter}) => {

  const [premadeEncounterList, setPreEnc] = useState([])

  const createPremadeList = () => {
    const encounterKeys = Object.keys(encounterData);
    const encounterList = encounterKeys.reduce((list,key, index) => {
      const nonRepeatList = [0,1,4,7, 9];
      if (nonRepeatList.includes(index)) {
        const newEncounter = encounterData[key];
        addDice(newEncounter);
        list.push(encounterData[key]);
      }
      return list
    }, [])
    addEncounter(encounterList, floorID, 'premade');
  }

  const rollEncounter = () => {
    const roll = rollDice('1.10')
    const newEncounter = encounterData[formatRoll(roll)];
    addDice(newEncounter);
    addEncounter(newEncounter, floorID, 'random');
  }

  const preMadeEncounters = encounterList.premade.map((encounter, index) => {
    const id = getID();
    return (
      <Encounter
        floor={floorID}
        eData={encounter}
        id={id+index}
        key={id+index}
        addEncounter={addEncounter}
        list={'preMade'}
      />
    )
  })

  const randomEncounters = encounterList.random.map((encounter, index) => {
    const id = getID();
    return (
      <Encounter
        floor={floorID}
        eData={encounter}
        id={id+index}
        key={id+index}
        addEncounter={addEncounter}
        list={'random'}
      />
    )
  })


  //useEffect to prevent weird rerender problem
  //add another create list function to call on useEffect to ensure both list are stable
  //roll dice in floor then pass those down to encounters for initial

  useEffect(() => {
    createPremadeList();
  },[])

  useEffect(() => {
    createPremadeList();
  },[location.pathname])

  return (
    <section className='floor-container'>
      <h2 className='floor-title'>{floorName}</h2>
      <nav className='floor-controls'>
        <button>RANDOM ENCOUNTERS</button>
        <button>ENCOUNTER LIST</button>
      </nav>
      <section className='encounter-grid'>
        <div className='premade'>
          {preMadeEncounters}
        </div>
        <div className='random'>
          {randomEncounters}
          <button onClick={rollEncounter}className='new-random'>+</button>
        </div>
      </section>
    </section>
  )
}

export default Floor

Floor.propTypes = {
  floorID: PropTypes.string,
  floorName: PropTypes.string,
  encounterData: PropTypes.object,
  addEncounter: PropTypes.func
};
