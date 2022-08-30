import images from "../images/placeholder.jpeg";
import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getAlternativeName = (alternativeNames) => {
    const result = alternativeNames.join(", ");
    return result;
  };
  return (
    <>
      <section className="section-details">
        <li className="details">
          <a href="#" className="link">
            <img
              className="img-details"
              src={props.user.image ? props.user.image : images}
              alt={`Foto de ${props.user.name}`}
              title={`Foto de ${props.user.name}`}
            />
            <div className="div-details">
              <div className="properties">
                <h3 className="all">{props.user.name}</h3>
                <p className="all">{props.user.house ? props.user.house : ""}</p>
                <p className="all">{props.user.species}</p>
                <p className="all">{props.user.alive ? "Live" : "Dead"}</p>
                <p className="all">{props.user.gender}</p>
                <p className="all">{" "}{getAlternativeName(props.user.alternate_names)}</p>
              </div>
            </div>
          </a>
        </li>
      </section>
      <Link to={`/`} className="return">Volver a la página principal</Link>
    </>
  );
};
export default CharacterDetail;
