const fetchDice = async () => {
  const diceURL = 'http://roll.diceapi.com/json/2000d10';
  const response = await fetch(diceURL);
  const rawDice = await response.json();
  return rawDice.dice.map(dice => dice.value);
}

// const fetchName = async () => {
//   const nameURL = 'https://api.parser.name/?api_key=eb5e06acba590aa0105f277ed25d24fc&endpoint=generate';
//   const response = await fetch (nameURL);
//   const rawName = await response.json()
//   return rawName.data.name.name_ascii;
// }

export { fetchDice }
