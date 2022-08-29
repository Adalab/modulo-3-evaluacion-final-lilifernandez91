import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import CharacterList from "../components/CharacterList";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";
import {useLocation, matchPath} from 'react-router';
//import { checkPropTypes } from "prop-types"
//import PropTypes from "prop-types"
//import NotFoundPage from './NotFoundPage';

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

  const handleFilterByCharacter = (value) => {
    setFilterByCharacter(value);
  };

  const userFiltered = dataUsers.filter((user) => {
    return (
      user.house === filterByHouse &&
      user.name.toLowerCase().includes(filterByCharacter.toLowerCase())
    );
  });

  const {pathname} = useLocation()
  const dataPath = matchPath("user/:userId", pathname)

  const userId = dataPath !== null ? dataPath.params.userId : null
  const userFound = dataUsers.find(user => {return user.id === userId})

  return (
    <div>
      <Routes>
        <Route
          path="/" 
          element={
            <>
              <header>
                <Filters
                  handleFilterByHouse={handleFilterByHouse}
                  handleFilterByCharacter={handleFilterByCharacter}
                />
              </header>

              <main>
                <CharacterList characterList={userFiltered}
                character={filterByCharacter} />
              </main>
            </>
          }
          >
        </Route>

        <Route
          path="/user/:userid"
          element={
            <CharacterDetail user={userFound}/>
          }
          >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
