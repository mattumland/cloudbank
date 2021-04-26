import React, { useState } from 'react';
import PropTypes from 'prop-types';
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


  addTags(encounter);
  testFetch('CHMA0000021696');

  return(
    <section className='test-response'>
      <h2 data-cy='singleName'>{singleName}</h2>
      <div>
        <p>{encounter.description}</p>
        <p data-cy='randomName'>{encounter.name}</p>
      </div>
    </section>
  )
}

export default Test;

Test.propTypes = {
  encounter: PropTypes.object
}
