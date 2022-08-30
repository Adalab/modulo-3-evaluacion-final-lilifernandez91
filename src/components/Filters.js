import "../styles/Filters.scss";
import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import PropTypes from 'prop-types';

const Filters = (props) => {
  return (
    <div className="div-container-header">
      <button className="button-reset" onClick={props.handleReset}>Reset</button> 
      <h1>Harry Potter</h1>
      <form className="form-header">
        <FilterByCharacter
        handleFilterByCharacter={props.handleFilterByCharacter}
        filterByCharacter={props.filterByCharacter}
        />
        <FilterByHouse 
        handleFilterByHouse={props.handleFilterByHouse}
        filterByHouse={props.filterByHouse}
        />
      </form>
    </div>
  );
};

Filters.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleFilterByCharacter: PropTypes.func.isRequired,
  handleFilterByHouse: PropTypes.func.isRequired,
  filterByCharacter: PropTypes.string.isRequired,
  filterByHouse: PropTypes.string.isRequired,
};

export default Filters;
