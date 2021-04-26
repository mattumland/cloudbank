import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, rollDice, d100, formatNum, addDice, addTags, formatSideBar } from '../../utilities';

const Floor = ({ floorID, floorName, encounterData, encounterList, addEncounter}) => {

  const [sideBarList, setSideBar] = useState([]);
  const [encounterUpdate, setEncounter] = useState(encounterData['01']);

  // console.log('list', encounterList)
  // console.log('data', encounterData)

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
    const newEncounter = encounterData[formatNum(roll,10)];
    addDice(newEncounter);
    addTags(newEncounter);
    console.log(newEncounter);
    newEncounter.id = getID();
    newEncounter.floor = floorID;
    setEncounter(newEncounter);
    console.log(encounterUpdate);
    addEncounter(newEncounter, floorID, 'random');
  }

  const randomEncounter = encounterList.random.map((encounter, index) => {
    return (
      <Encounter
        floor={floorID}
        eData={encounter}
        key={index+1000}
        addEncounter={addEncounter}
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
    createSideBar();
  },[location.pathname])

  return (
    <>
      <h2 className='floor-title'>{floorName}</h2>
        <section className='encounter-grid'>
          <button onClick={rollEncounter}className='new-random'>GENERATE ENCOUNTER</button>
          <section className='encounter'>
            {randomEncounter}
          </section>

          <h3 className='encounter-list-title'>ENCOUNTER LIST</h3>
          <ol className='encounter-list'>
            <li data-cy='sidebar' >{sideBarList[0]}</li>
            <li data-cy='sidebar' >{sideBarList[1]}</li>
            <li data-cy='sidebar' >{sideBarList[2]}</li>
            <li data-cy='sidebar' >{sideBarList[3]}</li>
            <li data-cy='sidebar' >{sideBarList[4]}</li>
          </ol>
          <div className='responsive-block'></div>
  
        </section>
    </>
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
