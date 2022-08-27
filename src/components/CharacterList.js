import "../styles/CharacterList.scss";
import CharacterCard from "../components/CharacterCard"

const CharacterList = (props) => {
  const userElements = props.characterList.map((item) => {
    return (
      <CharacterCard user={item}/>
    );
  });

  return (
    <div className="div-container-main">
      <ul className="ul-container">{userElements}</ul>
    </div>
  );
};

export default CharacterList;
