import "../styles/App.scss";
//import PropTypes from "prop-types"
//import {Link, Route, Routes} from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';
//import {useLocation, matchPath} from 'react-router';
//import getDataApi from "../services/fetch";
//import ls from "../services/localStorage";
//import { useEffect, useState } from "react";
//import Header from "./Header";
//import Footer from "./Footer";
//import { Route, Routes } from "react-router-dom";
import images from "../images/harry-potter-img.jpeg";

function App() {
  return (
    <div>
      <header>
        <div className="div-container-header">
          <h1>Harry Potter</h1>
          <form>
            <div className="search-by-character">
              <label className="label-search">Busca por personaje:</label>
              <input className="input" type="text" name="" value=""></input>
            </div>
            <div className="select-the-house">
              <label className="label-select">
                Selecciona la casa:
                </label>
                <select className="select">
                  <option value=""></option>
                </select>
            </div>
          </form>
        </div>
      </header>

      <main>
        <div className="div-container-main">
          <div className="div-container">
            <div className="div-info">
              <img className="image" src={images} alt="" />
              <div className="info">
                <h3>Name</h3>
                <p>House</p>
              </div>
            </div>
          </div>
          <div className="div-container">
            <div className="div-info">
              <img className="image" src={images} alt="" />
              <div className="info">
                <h3>Name</h3>
                <p>House</p>
              </div>
            </div>
          </div>
          <div className="div-container">
            <div className="div-info">
              <img className="image" src={images} alt="" />
              <div className="info">
                <h3>Name</h3>
                <p>House</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

//   Input.defaultProps = {
//     inputType: 'text'
//   }

//     NombreDelComponente.propTypes = {
//         nombreDeLaPropiedadOpcional: propTypes.string
//         nombreDeLaPropiedadObligatoria: propTypes.string.isRequired
//   }

export default App;
