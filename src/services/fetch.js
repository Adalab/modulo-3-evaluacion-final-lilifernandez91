function getDataApi () {

  return fetch(`pongo la url`)
   .then((response) => response.json())
   .then((data) => {
   return data
 })
}

export default getDataApi