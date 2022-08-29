import "../styles/Filters.scss";
import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

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

export default Filters;
