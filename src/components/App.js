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
  const [filterByCharacter, setFilterByCharacter] = useState("all")
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor")


  useEffect(() => {
    getDataApi().then((data) => {
      setDataUsers(data)
    })
  }, [])

  const handleFilterByHouse = (value) => {
setFilterByHouse(value)
  }

  const userFilters = dataUsers
  .filter((user)=> {
    if(filterByHouse === "Gryffindor"){
      return true
    } else if (filterByHouse === ""){
      return "Gryffindor"
    } else {
      return user.house === filterByHouse
    }
  })

  return (
    <div>
      <header>
          <Filters 
          filterByHouse={filterByHouse}
          handleFilterByHouse={handleFilterByHouse}
          />  
      </header>

      <main>
        <CharacterList characterList={userFilters}/>
      </main>
    </div>
  )
}

export default App
