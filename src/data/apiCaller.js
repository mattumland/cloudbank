export const fetchName = (id) => {
  return fetch(`http://stapi.co/api/v1/rest/character?uid=${id}`)
    .then(response => {
      return response.json()
  })
}
