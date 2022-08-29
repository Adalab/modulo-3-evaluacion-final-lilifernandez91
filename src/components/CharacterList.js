import "../styles/CharacterList.scss";
import CharacterCard from "../components/CharacterCard";

const CharacterList = (props) => {
  const userElements = props.characterList.map((item, i) => {
    return <CharacterCard user={item} key={i} />; 
  });

  return (
    <div className="div-container-main">
      {userElements.length > 0 ? (
        <ul className="ul-container">{userElements}</ul>
      ) : (
        <div>
          <p className="message">No hay ningún personaje que coincida con la palabra {props.character}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
