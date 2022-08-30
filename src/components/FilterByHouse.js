import objectToExport from "../services/localStorage";
import PropTypes from 'prop-types';

const FilterByHouse = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    objectToExport.set("filterByHouse", ev.target.value);
    props.handleFilterByHouse(ev.target.value);
  };

  return (
    <div className="select-the-house">
      <label className="label-select">Selecciona la casa:</label>
      <select
        className="select"
        value={props.filterByHouse}
        onChange={handleChange}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="">No home</option>
      </select>
    </div>
  );
};

FilterByHouse.propTypes = {
  handleFilterByHouse: PropTypes.func.isRequired,
  filterByHouse: PropTypes.string.isRequired,
};

export default FilterByHouse;
