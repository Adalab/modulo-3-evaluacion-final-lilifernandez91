const FilterByCharacter = (props) => {
  const handleChange = (ev) => {
    props.handleFilterByCharacter(ev.target.value);
  };

  return (
    <div className="search-by-character">
      <label className="label-search">Busca por personaje:</label>
      <input
        value={props.filterByCharacter}
        onChange={handleChange}
        className="input"
        type="text"
        name="character"
      ></input>
    </div>
  );
};

export default FilterByCharacter;
