import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { rollDice, d100 } from '../../utilities';
import './Encounter.scss';

//add new prop for rolledData,

const Encounter = ({ floor, eData, id, list }) => {
  const [count, setCount] = useState('');
  const [description, setDescription] = useState('');
  const [reference, setReference] = useState('');
  const [attititude, setAttitude] = useState('');
  const [distance, setDistance] = useState('');
  const [strength, setStrength] = useState('');

  const createDescription = () => {
    if (eData.count) {
      setCount(rollDice(eData.count));
    }

    if (count === 1) {
      setDescription(`A ${eData.description}`)
    } else if (count > 1) {
      setDescription(`${count} ${eData.description}s`);
    } else {
      setDescription(eData.description);
    }

    if (eData.reference) {
      setReference(`(${eData.reference})`)
    }
  }

  const createSituation = () => {
    const roll1 = d100();
    const roll2 = d100();
    if (roll1.value > 50) {
      setDistance('nearby');
    } else {
      setDistance('far away');
    }

    if (roll2.value > 50) {
      setStrength('strong');
    } else {
      setStrength('weak');
    }

    if (roll2.value % 2 === 0 && roll2.isDouble) {
      setAttitude('friendly');
    }  else if (roll2.value % 2 === 0 && !roll2.isDouble) {
        setAttitude('positive');
    }  else if (roll2.value % 2 != 0 && roll2.isDouble) {
        setAttitude('hostile');
    }  else if (roll2.value % 2 != 0 && !roll2.isDouble) {
        setAttitude('negative');
    }
  }

  const setUpTags = () => {
    //switch statement that looks at tags
    //the outcome of this sets the value of "bonus"
    //this is a new set of data that conditionally renders
  }

  const reroll = () => {
    createSituation();
    createDescription();
  }

  useEffect(() => {
    createSituation();
    createDescription();
  },[distance])

  return (
    <aside className='encounter-container'>
      <h2 className='description'>{`${description} ${reference}`}</h2>
      {eData.tags!=='short' && (
      <div className='situation-container'>
        <h3>{`Location - ${distance}`}</h3>
        <h3>{`Attitude - ${attititude}`}</h3>
        <h3>{`Status - ${strength}`}</h3>
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
}
