export const shuffleItems = (array) => {
  return array.sort(() => 0.5 - Math.random());
}

export const cleanDiceData = (diceData) => {
    return diceData.dice.map(dice => dice.value);
}

export const getID = () => {
  return Date.now();
}

/*
get a bunch of dice
get a bunch of names
rollDice - pull out one dice from the array
shuffle items
roll2 - roll2 return an object with the 100 value and Boolean if they’re doubles
processCount - takes in .count from .encounter and returns a formatted number
*/
