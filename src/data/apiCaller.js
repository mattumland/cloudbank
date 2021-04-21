export const getDicePool = async () => {
  const diceURL = 'http://roll.diceapi.com/json/2000d10';
  const response = await fetch (diceURL);
  const rawDice = await reponse.json();

}
