export const shuffleItems = (array) => {
  return array.sort(() => 0.5 - Math.random());
}

export const getID = () => {
  return Date.now();
}

export const formatIndex = (num) => {
  const value = ((num === 0) ? '10' : `0${num}`)
  return value.toString();
}

export const formatRoll = (num) => {
  const value = ((num === 10) ? '10' : `0${num}`)
  return value.toString();
}

export const rollDice = (diceCount) => {
  const diceData = diceCount.split('.');
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

/*
get a bunch of dice
get a bunch of names
rollDice - pull out one dice from the array
shuffle items
roll2 - roll2 return an object with the 100 value and Boolean if they’re doubles
processCount - takes in .count from .encounter and returns a formatted number
*/
