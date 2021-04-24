import { nameIDs } from './gdData';
import { shuffleItems } from '../utilities';

export const fetchName = () => {
  const id = shuffleItems(nameIDs)[0];
  return fetch(`http://stapi.co/api/v1/rest/character?uid=${id}`)
    .then(response => {
      return response.json()
    })
}
