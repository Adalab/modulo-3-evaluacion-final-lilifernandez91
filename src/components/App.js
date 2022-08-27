import "../styles/App.scss"
import getDataApi from "../services/fetch"
import { useEffect, useState } from "react"
import Filters from "../components/Filters"
import CharacterList from "../components/CharacterList"
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
  const [dataUsers, setDataUsers] = useState([])

  useEffect(() => {
    getDataApi().then((data) => {
      setDataUsers(data)
    })
  }, [])

  return (
    <div>
      <header>
          <Filters />  
      </header>

      <main>
        <CharacterList characterList={dataUsers}/>
      </main>
    </div>
  )
}

export default App
