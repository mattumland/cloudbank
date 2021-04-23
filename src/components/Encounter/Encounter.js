import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { rollDice } from '../../utilities';
import './Encounter.scss';

const Encounter = ({ floor, eData, id }) => {

  //set default values, assign new values after checking contents of eData
  let count = '';
  let description = ''
  let attititude = ''; //positive friendly negative hostile
  let distance = ''; //nearby far away
  let strength = ''; // strong weak

  if (eData.count) {
    count = rollDice(eData.count);
  }

  if (count === 1) {
    description = `A ${eData.description}`
  } else if (count > 1) {
    description = `${count} ${eData.description}s`;
  } else {
    description = eData.description;
  }

  //attititude

  //add distance
  //strength & reaction
  //reaction
  //check count and assign value to render variable

  useEffect(() => {
  },[])

  return (
    <aside className='encounter-container'>
      <h2 className='description'>{`${description} (${eData.reference})`}</h2>
      <button>SAVE</button>
      <button>REROLL</button>
    </aside>
  )

}

export default Encounter;

Encounter.propTypes = {
  floor: PropTypes.string,
  eData: PropTypes.object,
  id: PropTypes.number,
}
