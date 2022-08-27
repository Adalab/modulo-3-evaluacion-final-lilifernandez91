import "../styles/Filters.scss";
import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

const Filters = (props) => {
  return (
    <div className="div-container-header">
      <h1>Harry Potter</h1>
      <form>
        <FilterByCharacter />
        <FilterByHouse 
        handleFilterByHouse={props.handleFilterByHouse}
        />
      </form>
    </div>
  );
};

export default Filters;
