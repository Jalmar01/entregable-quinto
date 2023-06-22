import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import { useSelector } from "react-redux"
import PokeContainers from "../components/Pokedex/PokeContainers"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import '../pages/styles/Pokedex.css'

const Pokedex = () => {

  const [initialPage, setInitialPage] = useState(1)
  const contentPerPage = 16


  const indexOfLastItem = initialPage * contentPerPage
  const indexOfFirstItem = indexOfLastItem - contentPerPage



  const [selectValue, setSelectValue] = useState('all-pokemons')

  const trainerName = useSelector(states => states.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
 const [pokemons, getAllPokemon, hasError, setPokemons] = useFetch(url)
 const urlTypes = 'https://pokeapi.co/api/v2/type'
 const [types, getAllTypes] = useFetch(urlTypes)

 useEffect(() => {
  if (selectValue === 'all-pokemons') {
    getAllPokemon()
  } else {
    axios.get(selectValue)
    .then( res => {
      const data = {
        results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
      }
      setPokemons(data)
    })
    .catch(err => console.log(err))
  }
 }, [selectValue])

 useEffect(() => {
  getAllTypes()
}, [])

 const searchPoke = useRef()
 const navigate = useNavigate()

 const handleSubmitPoke = e => {
  e.preventDefault()
  const inputValue = searchPoke.current.value.trim().toLowerCase()
  navigate(`/pokedex/${inputValue}`)
 }

  const handelChangeType =  e => {
   setSelectValue( e.target.value)
  } 

  const initialItems = pokemons?.results.slice(indexOfFirstItem, indexOfLastItem)


  return (
    <div className="app__1">
        <div>
          <header className="header">
            <img src="./imge/logo.svg" alt="logo" />
          </header>
        </div>
        
        <div className="pokedex__title">
          <p className="pokedex__p"> <span>Welcome {trainerName}</span>, you can find your favorite pokemon</p>
          <form 
            className="pokedex__form" 
            onSubmit={handleSubmitPoke}>
            <input 
              className="pokedex__input" 
              ref={searchPoke} type="Your favorite pokemon" 
              // value= 'Your favorite pokemon...'
            />
            <button className="pokedex__button">Search</button>
            <select className="pokedex__select" onChange={handelChangeType }>
              <option className="pokedex__optional" value='all-pokemons'>All pokemons</option>
              {
                types?.results.map(typeInfo => (
                  <option 
                  className="pokedex__optional-label"
                    value={typeInfo.url}
                    key={typeInfo.url}
                  >{typeInfo.name}</option> 
                ))
              }
            </select>
          </form>
        </div>
       
        <PokeContainers 
            pokemons={pokemons?.results}
            initialItems={initialItems}
            setInitialPage={setInitialPage}
            initialPage={initialPage}
            contentPerPage={contentPerPage}
          />
           
    </div>
    
  )
}

export default Pokedex