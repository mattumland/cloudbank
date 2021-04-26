import React from 'react';
import PropTypes from 'prop-types';
import Encounter from '..//Encounter/Encounter';
import './Saved.scss'

const Saved = ({ encounterLists, deleteEncounter, addEncounter }) => {

  const encounterKeys = Object.keys(encounterLists).filter(key => {
    return encounterLists[key].saved.length
  });

  const encounterData = encounterKeys.reduce((list, key) => {
    const paritalList = encounterLists[key].saved;
    list = list.concat(paritalList);
    return list;
  }, [])

  const savedEncounters = encounterData.map((encounter, index) => {
    return (
      <Encounter
        floor={encounter.floor}
        eData={encounter}
        key={index+1000}
        deleteEncounter={deleteEncounter}
        addEncounter={addEncounter}
        list={'saved'}
      />
    )
  })

  const savedMessage = savedEncounters.length ? 'Saved encounters': "No encounters have been saved"
console.log(savedMessage);

  return(
    <>
      <h2 className='saved-message'>{savedMessage}</h2>
      <section className='saved-list'>
        {savedEncounters}
      </section>
    </>
  )
}

export default Saved;

Saved.propTypes = {
  addEncounter: PropTypes.func,
  encounterList: PropTypes.string,
  deleteEncounter: PropTypes.func
};
