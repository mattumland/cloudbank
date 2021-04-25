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
      const nonRepeatList = [0,1,4,7,9];
      if (nonRepeatList.includes(index)) {
        const newEncounter = encounterData[key];
        addDice(newEncounter);
        newEncounter.id = getID() + d100().value;
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
    newEncounter.id = getID() + d100().value;
    addEncounter(newEncounter, floorID, 'random');
  }

  const preMadeEncounters = encounterList.premade.map((encounter, index) => {
    return (
      <Encounter
        floor={floorID}
        eData={encounter}
        key={index}
        addEncounter={addEncounter}
        encounterList={encounterList}
        list={'preMade'}
      />
    )
  })

  const randomEncounters = encounterList.random.map((encounter, index) => {
    return (
      <Encounter
        floor={floorID}
        eData={encounter}
        key={index+1000}
        addEncounter={addEncounter}
        encounterList={encounterList}
        list={'random'}
      />
    )
  })

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
        <button onClick={rollEncounter}className='new-random'>GENERATE ENCOUNTER</button>
      </nav>
      <section className='encounter-grid'>
        <section className='random'>
          {randomEncounters}
        </section>
        <h3 className='premade'>ENCOUNTER LIST</h3>
        <aside >
          {preMadeEncounters}
        </aside>
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

// <button onClick={rollEncounter}className='new-random'>roll new encounter</button>
