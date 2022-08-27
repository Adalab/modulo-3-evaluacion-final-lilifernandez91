import "../styles/Filters.scss"

const Filters = () => {
  return (
    <div className="div-container-header">
      <h1>Harry Potter</h1>
      <form>
        <div className="search-by-character">
          <label className="label-search">Busca por personaje:</label>
          <input className="input" type="text" name="" value=""></input>
        </div>
        <div className="select-the-house">
          <label className="label-select">Selecciona la casa:</label>
          <select className="select">
            <option value=""></option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
