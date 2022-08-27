const getDataApi = () => {
  return fetch("http://hp-api.herokuapp.com/api/characters")
  .then(response => response.json())
  .then(data => {
    //limpio los datos y solo me quedo con la info que me interesa
    const dataClean = data.map(user => {
      return {
        image: user.image,
        name: user.name,
        species: user.species,
        id: user.dateOfBirth,
        house: user.house
      }
    })
    return dataClean
  })
}

export default getDataApi
