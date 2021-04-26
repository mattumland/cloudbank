import React, { useState } from 'react';
import { addTags } from '../../utilities';
import { fetchName } from '../../data/apiCaller'
import './Test.scss';

const Test = ({ encounter }) => {
  const [singleName, setName] = useState('')

  const testFetch = (nameID) => {

  Promise.all([fetchName(nameID)])
    .then((nameData) => {
      setName(`'${nameData[0].character.name}'`)
    })
    .catch(err => setName(`'Mummy'`))
  }


  addTags(encounter); //produces a random name
  testFetch('CHMA0000021696');

  return(
    <section className='test-response'>
      <h2 data-cy='singleName'>{singleName}</h2>
      <div data-cy='singleEncounter'>
        <p>{encounter.description}</p>
        <p>{encounter.name}</p>
      </div>
    </section>
  )

}

export default Test;
