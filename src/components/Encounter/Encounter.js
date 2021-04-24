import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { } from '../../utilities';
import './Encounter.scss';

//add new prop for rolledData,

const Encounter = ({ floor, eData, id, list, addEncounter }) => {
  let count = '';
  let description = '';
  let reference = '';
  let attititude = '';
  let distance = '';
  let status= '';

  const createDescription = () => {
    description = '';
    if (eData.count) {
      switch(eData.count) {
        case '1.10':
          count = eData.d10s[0]
          break;
        case '1.5':
          count = Math.round((eData.d10s[0])/2)
          break;
        case '2.10':
          count = (eData.d10s[0] + eData.d10s[1]);
          break;
      }
    }

    if (count === 1) {
      description =`A ${eData.description}`
    } else if (count > 1) {
      description =`${count} ${eData.description}s`;
    } else {
      description= eData.description;
    }

    if (eData.reference) {
      reference = `(${eData.reference})`
    }
  }

  const createSituation = () => {
    const roll1 = eData.d100s[0];
    const roll2 = eData.d100s[1];
    if (roll1.value > 50) {
      distance ='nearby';
    } else {
      distance ='far away';
    }

    if (roll2.value > 50) {
      status ='strong';
    } else {
      status ='weak';
    }

    if (roll2.value % 2 === 0 && roll2.isDouble) {
      attititude = 'friendly';
    }  else if (roll2.value % 2 === 0 && !roll2.isDouble) {
        attititude = 'positive';
    }  else if (roll2.value % 2 != 0 && roll2.isDouble) {
        attititude = 'hostile';
    }  else if (roll2.value % 2 != 0 && !roll2.isDouble) {
        attititude = 'negative';
    }
  }

  const setUpTags = () => {
    //switch statement that looks at tags
    //the outcome of this sets the value of "bonus"
    //this is a new set of data that conditionally renders
  }

  createSituation();
  createDescription();

  const reroll = () => {
    createSituation();
    createDescription();
  }

  useEffect(() => {
    createSituation();
    createDescription();
  },[distance])

// console.log(eData);
//   console.log(description, reference, distance, attititude, status)

  return (
    <aside className='encounter-container'>
      <h2 className='description'>{`${description} ${reference}`}</h2>
      {eData.tags!=='short' && (
      <div className='situation-container'>
        <h3>{`Location - ${distance}`}</h3>
        <h3>{`Attitude - ${attititude}`}</h3>
        <h3>{`Status - ${status}`}</h3>
      </div>)
      }

      <div className='btn-container'>
        <button>SAVE</button>
        {eData.tags!=='short' && (
          <button onClick={reroll}>REROLL</button>)
        }
        {list==='random' && (
          <button>DELETE</button>)
        }
      </div>
    </aside>
  )

}

export default Encounter;

Encounter.propTypes = {
  floor: PropTypes.string,
  eData: PropTypes.object,
  id: PropTypes.number,
  list: PropTypes.string,
  addEncounter: PropTypes.func
}
