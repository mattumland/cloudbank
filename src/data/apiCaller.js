import { nameIDs } from './gdData';
import { shuffleItems } from '../utilities';


export const fetchName = () => {
  const id = shuffleItems(nameIDs)[0];

  return fetch(`http://stapi.co/api/v1/rest/character?uid=${id}`)
    .then(response => {
      return response.json()
    })
}

// const fetchName = async () => {
//   const nameURL = 'https://api.parser.name/?api_key=eb5e06acba590aa0105f277ed25d24fc&endpoint=generate';
//   const response = await fetch (nameURL);
//   const rawName = await response.json()
//   return rawName.data.name.name_ascii;
// }
