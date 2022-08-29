import images from "../images/placeholder.jpeg";
import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getAlternativeName = (alternativeNames) => {
    if (!alternativeNames || alternativeNames.length === 0) {
      return "-";
    }
    const result = alternativeNames.join(", ");
    return result;
  };
  return (
    <>
      <Link to={`/`} className="return">Volver a la página principal</Link>
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
                <h3>Nombre: {props.user.name}</h3>
                <p>Casa: {props.user.house ? props.user.house : "-"}</p>
                <p>Especie: {props.user.species}</p>
                <p>Vivo: {props.user.alive ? "si" : "no"}</p>
                <p>Género: {props.user.gender}</p>
                <p>
                  Nombres alternativos:{" "}
                  {getAlternativeName(props.user.alternate_names)}
                </p>
              </div>
            </div>
          </a>
        </li>
      </section>
    </>
  );
};
export default CharacterDetail;
