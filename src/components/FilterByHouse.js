import objectToExport from "../services/localStorage";

const FilterByHouse = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault()
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
        <option selected={props.filterByHouse === "Gryffindor"} value="Gryffindor">Gryffindor</option>
        <option selected={props.filterByHouse === "Hufflepuff"} value="Hufflepuff">Hufflepuff</option>
        <option selected={props.filterByHouse === "Ravenclaw"} value="Ravenclaw">Ravenclaw</option>
        <option selected={props.filterByHouse === "Slytherin"} value="Slytherin">Slytherin</option>
        <option selected={props.filterByHouse === ""} value="">No home</option>
      </select>
    </div>
  );
};

export default FilterByHouse;
