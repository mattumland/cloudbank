import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, formatIndex, rollDice, d100, formatRoll, addDice, formatSideBar } from '../../utilities';

const Floor = ({ floorID, floorName, encounterData, encounterList, addEncounter}) => {

  const [sideBarList, setSideBar] = useState([])

  const createSideBar = () => {
    const encounterKeys = Object.keys(encounterData);
    const encounterList = encounterKeys.reduce((list, key, index) => {
      const nonRepeatList = [0,1,4,7,9];
      if (nonRepeatList.includes(index)) {
        const newEncounter = {
            count: encounterData[key].count,
            description: encounterData[key].description
          }

        list.push(newEncounter);
      }
      return list
    }, [])
    setSideBar(formatSideBar(encounterList))
  }

  const rollEncounter = () => {
    const roll = rollDice('1d10')
    const newEncounter = encounterData[formatRoll(roll)];
    addDice(newEncounter);
    newEncounter.id = getID();
    addEncounter(newEncounter, floorID, 'random');
  }

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
    rollEncounter();
    createSideBar();
  },[])


  useEffect(() => {
    rollEncounter();
  },[location.pathname])

  return (
    <section className='floor-container'>
      <h2 className='floor-title'>{floorName}</h2>
      <nav className='floor-controls'>
      </nav>
      <section className='encounter-grid'>
        <button onClick={rollEncounter}className='new-random'>GENERATE ENCOUNTER</button>
        <section className='encounter'>
          {randomEncounters}
        </section>

        <aside className='encounter-sidebar'>
        <h3 className='encounter-list-title'>ENCOUNTER LIST</h3>
        <ol className='encounter-list'>
          <li>{sideBarList[0]}</li>
          <li>{sideBarList[1]}</li>
          <li>{sideBarList[2]}</li>
          <li>{sideBarList[3]}</li>
          <li>{sideBarList[4]}</li>
        </ol>
        <div className='responsive-block'></div>
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
    // {preMadeEncounters}
// <button onClick={rollEncounter}className='new-random'>roll new encounter</button>
