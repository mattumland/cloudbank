import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, formatIndex, rollDice, formatRoll } from '../../utilities';

const Floor = ({ floorName, encounters }) => {

  const [randomEncounterList, setRanEnc] = useState([]);
  const [premadeEncounterList, setPreEnc] = useState([])

  const createEncounterList = () => {
    const encounterKeys = Object.keys(encounters);
    const encounterList = encounterKeys.reduce((list,key, index) => {
      const nonRepeatList = [0,1,4,7];
      if (nonRepeatList.includes(index)) {
        list.push(encounters[key]);
      }
      return list
    }, [])
    setPreEnc(encounterList);
  }

  //use state to hold both of these lists
  //build random encounter list

  const rollEncounter = () => {
    const roll = rollDice('1.10')
    const newEncounter = encounters[formatRoll(roll)];
    setRanEnc([...randomEncounterList, newEncounter]);
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

  const randomEncounters = randomEncounterList.map((encounter, index) => {
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

  useEffect(() => {
    createEncounterList();
  },[])

  debugger;

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
  dice: PropTypes.array,
};
