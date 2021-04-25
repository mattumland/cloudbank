import React from 'react';
import Encounter from '..//Encounter/Encounter';

const Saved = ({ encounterLists, deleteEncounter, addEncounter }) => {

  // console.log(encounterLists)

  const encounterKeys = Object.keys(encounterLists).filter(key => {
    return encounterLists[key].saved.length
  });

  const encounterData = encounterKeys.reduce((list, key) => {
    const paritalList = encounterLists[key].saved;
    list = list.concat(paritalList);
    return list;
  }, [])

  // console.log(encounterData);

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

  //user effect to rerender if list changes
  //pass delete func as prop

  return(
    <section>
      {savedEncounters}
    </section>
  )
}

export default Saved;


/*


*/
