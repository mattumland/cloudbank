import React from 'react';
import PropTypes from 'prop-types';
import './Floor.scss';
import Encoutner from '../Encounter/Encounter';

const Floor = (floorName, encounters, dice) => {

  //props: encounter list, floor number
  //start with premade list
  //build random encounter list




  return (
    <section className='floor-container'>
      <nav className='floor-controls'>
        <button>RANDOM ENCOUNTERS</button>
        <button>ENCOUNTER LIST</button>
      </nav>

    </section>
  )

}

export default Floor

Floor.propTypes = {
  floorName: PropTypes.string,
  encounters: PropTypes.object,
  dice: PropTypes.array,
};
