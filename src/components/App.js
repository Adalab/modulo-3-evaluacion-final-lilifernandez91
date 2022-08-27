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
  };

  const userFiltersByHouse = dataUsers.filter((user) => {
    return user.house === filterByHouse;
  });

  return (
    <div>
      <header>
        <Filters
          handleFilterByHouse={handleFilterByHouse}
        />
      </header>

      <main>
        <CharacterList characterList={userFiltersByHouse} />
      </main>
    </div>
  );
}

export default App;
