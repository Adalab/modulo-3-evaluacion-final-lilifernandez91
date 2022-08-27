import "../styles/CharacterList.scss";
import CharacterCard from "../components/CharacterCard"

const CharacterList = (props) => {
  const userElements = props.characterList.map((item, i) => {
    return (
      <CharacterCard user={item} key={i}/>
    );
  });

  return (
    <div className="div-container-main">
      <ul className="ul-container">{userElements}</ul>
    </div>
  );
};

export default CharacterList;
