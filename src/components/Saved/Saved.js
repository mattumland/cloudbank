import React from 'react';

const Saved = ({ encounterList }) => {


  const encounterKeys = Object.keys(encounterList).filter(key => {
    return encounterList[key].saved.length
  });
  
  //filter out keys that don't have saved encounters
  //an array of keys that all have saved enctouerns
  //reduce the ^ array of keys
    //produce single array of all saved encounter data, ensure that this also includes the flood
  //iterate over this array to create encounters components
  //render those components


  //user effect to rerender if list changes
  //pass delete func as prop

  return(
    <>
    </>
  )
}

export default Saved;


/*


*/
