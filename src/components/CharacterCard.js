import images from "../images/placeholder.jpeg"

const CharacterCard = (props) => {
  return (
    <li className="li-info">
        <img
          className="image"
          src={props.user.image ? props.user.image : images}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        />
        <div className="info">
          <h3>{props.user.name}</h3>
          <p>{props.user.species}</p>
        </div>
    </li>
  );
};

export default CharacterCard;
