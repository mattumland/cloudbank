import React from 'react';
import PropTypes from 'prop-types';
import './Encounter.scss';

const Encounter = ({ floor, eData, id }) => {

  return (
    <aside className='encounter-container'>
      <h2 className='description'>{`${eData.count} ${eData.description} (${eData.reference})`}</h2>
    </aside>
  )

}

export default Encounter;

Encounter.PropTypes = {
  floor: PropTypes.string,
  eData: PropTypes.object,
  id: PropTypes.number
}
