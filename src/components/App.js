import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";
//import { checkPropTypes } from "prop-types"
//import { checkPropTypes } from "prop-types"
//import { checkPropTypes } from "prop-types"
//import PropTypes from "prop-types"
//import {Link, Route, Routes} from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';
//import {useLocation, matchPath} from 'react-router';
//import ls from "../services/localStorage";
//import { Route, Routes } from "react-router-dom";

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterByCharacter, setFilterByCharacter] = useState("");
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");

  useEffect(() => {
    getDataApi().then((data) => {
      setDataUsers(data);
    });
  }, []);

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
    userFiltered();
  };

  const handleFilterByCharacter = (value) => {
    setFilterByCharacter(value);
    userFiltered();
  };

  const userFiltered = dataUsers
  .filter((user) => {
    return user.house === filterByHouse && user.name.toLowerCase().includes(filterByCharacter.toLowerCase());
  });

  return (
    <div>
      <header>
        <Filters
          handleFilterByHouse=
          {handleFilterByHouse}
          handleFilterByCharacter={handleFilterByCharacter}
        />
      </header>

      <main>
        <CharacterList 
        characterList= {userFiltered} />
      </main>
    </div>
  );
}

export default App;
