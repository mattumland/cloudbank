import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID, formatIndex } from '../../utilities';

const Floor = ({ floorName, encounters }) => {

  const [randomEncounters, updateRanEnc] = useState([]);

  const encounterKeys = Object.keys(encounters);
  const encounterList = encounterKeys.reduce((list,key, index) => {
    const nonRepeatList = [0,1,4,7];
    if (nonRepeatList.includes(index)) {
      list.push(encounters[key]);
    }
    return list
  }, [])

  //use state to hold both of these lists
  //build random encounter list

  const preMadeEncounters = encounterList.map((encounter, index) => {
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

  //useEffect to prevent weird rerender problem

  return (
    <section className='floor-container'>
      <nav className='floor-controls'>
        <button>RANDOM ENCOUNTERS</button>
        <button>ENCOUNTER LIST</button>
      </nav>
      <section className='encounter-grid'>
        {preMadeEncounters}
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


// console.log(list.encounters[key].description, list.encounters[index+1].description)
// console.log(list.encounters[key].description != list.encounters[index+1].description);
// if (!list.includes(encounters[key].description)) {
//   list.push(encounters[key])
// }
// console.log('after if',list)
