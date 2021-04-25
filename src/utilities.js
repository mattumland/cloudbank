import { fetchName } from './data/apiCaller';

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

// export const formatIndex = (num) => {
//   const value = ((num === 0) ? '10' : `0${num}`)
//   return value.toString();
// }
//pass in argument to pick 0 or 10 depending setting

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
  const value = rollDice('1.100');
  const digits = value.toString().split('');
  const isDouble = (digits[0]=== digits[1]);
  return {'value': value, 'isDouble': isDouble };
}

export const addDice = (encounter) => {
  encounter.d10s = [rollDice('1d10'),rollDice('1d10'),rollDice('1d10'),rollDice('1d10'),rollDice('1d10')]
  encounter.d100s = [d100(), d100()]
}

export const addTags = (encounter) => {
  switch(encounter.tags) {
    case 'name':
      fetchName()
      .then(nameData => encounter.name = `'${nameData.character.name}'`)
      .catch(err => encounter.name = `Mummy`)
      break;
  }
}
