const FilterByCharacter = (props) => {

    return(
        <div className="search-by-character">
          <label className="label-search">Busca por personaje:</label>
          <input 
          className="input" 
          type="text" 
          name="character">
          </input>
        </div>
    )
}

export default FilterByCharacter