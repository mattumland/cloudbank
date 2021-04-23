import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encounter from '../Encounter/Encounter';
import { getID } from '../../utilities';

const Floor = ({ floorName, encounters, dice }) => {

  const encounterKeys = Object.keys(encounters);
  const encounterList = encounterKeys.map(key => encounters[key])


  //build random encounter list

  const preMadeEncounters = encounterList.map((encounter, index) => {
    const id = getID();
    return (
      <Encounter
        floor={floorName}
        eData={encounter}
        id={id+index}
        key={id+index}
      />
    )
  })

  console.log(preMadeEncounters)

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
