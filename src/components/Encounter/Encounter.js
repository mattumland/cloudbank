import React from 'react';
import PropTypes from 'prop-types';
import './Encounter.scss';

const Encounter = ({ floor, eData, id }) => {

  return (
    <aside className='encounter-container'>
      <h2 className='description'>{`${eData.count} ${eData.description} (${eData.reference})`}</h2>
      <button>SAVE</button>
      <button>REROLL</button>
    </aside>
  )

}

export default Encounter;

Encounter.propTypes = {
  floor: PropTypes.string,
  eData: PropTypes.object,
  id: PropTypes.number
}
