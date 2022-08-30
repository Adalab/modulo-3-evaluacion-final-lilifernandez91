import objectToExport from "../services/localStorage";
import PropTypes from 'prop-types';

const FilterByCharacter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    objectToExport.set("filterByCharacter", ev.target.value);
    props.handleFilterByCharacter(ev.target.value);
  };

  return (
    <div className="search-by-character">
      <label className="label-search">Busca por personaje:</label>
      <input
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        value={props.filterByCharacter}
        onChange={handleChange}
        className="input"
        type="text"
        name="character"
      ></input>
    </div>
  );
};

FilterByCharacter.propTypes = {
  handleFilterByCharacter: PropTypes.func.isRequired,
  filterByCharacter: PropTypes.string.isRequired,
}

export default FilterByCharacter;
