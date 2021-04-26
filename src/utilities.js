import { fetchName } from './data/apiCaller';
import { nameIDs } from './data/gdData';

export const shuffleItems = (array) => {
  return array.sort(() => 0.5 - Math.random());
}

export const formatSideBar = (encArray) => {
  return encArray.map(encounter => {
    return encounter.count ?
      `${encounter.count} ${encounter.description}`:
      `${encounter.description}`
  })
}

export const getID = () => {
  const rawID = Date.now().toString().split('');
  return parseInt(shuffleItems(rawID).join(''));
}

export const formatNum = (num, tenNum) => {
  const value = ((num === tenNum) ? '10' : `0${num}`)
  return value.toString();
}

export const rollDice = (diceCount) => {
  const diceData = diceCount.split('d');
  let value = 0
  for (let i = 0; i < diceData[0]; i++) {
    value =+ value + (1 + Math.floor(Math.random()*diceData[1]))
  }
  return value;
}

export const d100 = () => {
  const value = rollDice('1d100');
  const digits = value.toString().split('');
  const isDouble = (digits[0]=== digits[1]);
  return {'value': value, 'isDouble': isDouble };
}

export const addDice = (encounter) => {
  encounter.d10s = [rollDice('1d10'),rollDice('1d10'),rollDice('1d10'),rollDice('1d10'),rollDice('1d10')]
  encounter.d100s = [d100(), d100()]
}

export const addTags = (encounter) => {
  const nameID = shuffleItems(nameIDs)[0];
  switch(encounter.tags) {
    case 'name':

      Promise.all([fetchName(nameID)])
      .then((nameData) => {
        encounter.name = `'${nameData[0].character.name}'`
      })
      .catch(err => encounter.name = `'Mummy'`)
      break;
    case 'tshooter':
      Promise.all([fetchName(nameID)])
      .then((nameData) => {
        encounter.name = `'${nameData[0].character.name}' is in charge.`
      })
      .catch(err => encounter.name = `'Mummy' is in charge.`)
      break;
  }
}


// case 'short':
//   Promise.all([fetchName()])
//   .then((nameData) => {
  //     encounter.name = `'${nameData[0].character.name}'`
  //   })
  //   .catch(err => encounter.name = `'Mummy'`)
  //   break;
  // case 'forgotten':
  //   Promise.all([fetchName()])
  //   .then((nameData) => {
    //     encounter.name = `'${nameData[0].character.name}'`
    //   })
    //   .catch(err => encounter.name = `'Mummy'`)
    //   break;
    // case '':
    //   Promise.all([fetchName()])
    //   .then((nameData) => {
      //     encounter.name = `'${nameData[0].character.name}'`
      //   })
      //   .catch(err => encounter.name = `'Mummy'`)
      //   break;
