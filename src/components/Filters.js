import "../styles/Filters.scss";
import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

const Filters = (props) => {
  return (
    <div className="div-container-header">
      <button className="button-reset">Reset</button>
      <h1>Harry Potter</h1>
      <form className="form-header">
        <FilterByCharacter
        handleFilterByCharacter={props.handleFilterByCharacter}
        />
        <FilterByHouse 
        handleFilterByHouse={props.handleFilterByHouse}
        />
      </form>
    </div>
  );
};

export default Filters;
