import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, formatIndex, rollDice, formatRoll } from '../../utilities';

const Floor = ({ floorID, floorName, encounterData, encounterList, addEncounter }) => {

  const [randomEncounterList, setRanEnc] = useState([]);
  const [premadeEncounterList, setPreEnc] = useState([])

  const createEncounterList = () => {
    const encounterKeys = Object.keys(encounterData);
    const encounterList = encounterKeys.reduce((list,key, index) => {
      const nonRepeatList = [0,1,4,7];
      if (nonRepeatList.includes(index)) {
        list.push(encounterData[key]);
      }
      return list
    }, [])
    setPreEnc(encounterList);
  }

  const rollEncounter = () => {
    const roll = rollDice('1.10')
    const newEncounter = encounterData[formatRoll(roll)];
    setRanEnc([...randomEncounterList, newEncounter]);
    addEncounter(newEncounter, floorID, 'random')
  }

  const preMadeEncounters = premadeEncounterList.map((encounter, index) => {
    const id = getID();
    return (
      <Encounter
        floor={floorName}
        eData={encounter}
        id={id+index}
        key={id+index}
        list={'preMade'}
      />
    )
  })

  const randomEncounters = encounterList.random.map((encounter, index) => {
    const id = getID();
    return (
      <Encounter
        floor={floorName}
        eData={encounter}
        id={id+index}
        key={id+index}
        list={'random'}
      />
    )
  })


  //useEffect to prevent weird rerender problem
  //add another create list function to call on useEffect to ensure both list are stable
  //roll dice in floor then pass those down to encounters for initial

  useEffect(() => {
    createEncounterList();
  },[])

  useEffect(() => {
    createEncounterList();
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
  floorName: PropTypes.string,
  encounters: PropTypes.object,
  addEncounter: PropTypes.func,
};
