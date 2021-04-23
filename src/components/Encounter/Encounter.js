import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { rollDice, d100 } from '../../utilities';
import './Encounter.scss';

const Encounter = ({ floor, eData, id }) => {

  //set default values, assign new values after checking contents of eData
  let count = '';
  let description = '';
  let reference = '';
  let attititude = ''; //positive friendly negative hostile
  let distance = ''; //nearby far away
  let strength = ''; // strong weak
  // let reroll = (eData.count || eData.tags)

  const createDescription = () => {
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

    if (eData.reference) {
      reference = `(${eData.reference})`
    }
  }

  const createSituation = () => {
    const roll1 = d100();
    const roll2 = d100();
    if (roll1.value > 50) {
      distance = 'nearby';
    } else {
      distance = 'far away';
    }

    if (roll2.value > 50) {
      strength = 'strong';
    } else {
      strength = 'weak';
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

  const reroll = () => {
    createSituation();
    createDescription();
  }

  createSituation();
  createDescription();

  useEffect(() => {
  },[])

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
