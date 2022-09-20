const getDataApi = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
  .then(response => response.json())
  .then(data => {
    //limpio los datos y solo me quedo con la info que me interesa
    const dataClean = data.map(user => {
      return {
        image: user.image,
        name: user.name,
        species: user.species,
        id: user.name.toLowerCase().replace(" ", "-"),
        house: user.house,
        alive: user.alive,
        gender: user.gender,
        alternate_names: user.alternate_names
      }
    })
    return dataClean
  })
}

export default getDataApi
