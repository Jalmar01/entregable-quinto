
import { useRef } from "react"
import { setTrainerNameG } from "../store/slices/trainerName.slices"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/Home.css'

const Home = () => {

const trainerNameRef = useRef()

const navigate = useNavigate()
const dispatch = useDispatch()

const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerNameG(trainerNameRef.current.value.trim()))
    navigate('/pokedex')
}


  return (
    <main className="container">
        <div className="home__container-img">
          <img src="./imge/logo.svg" alt="" />
        </div> 
        <div className="home__info">
          <h2 className="home__title">Hi, Trainer</h2>
          <p>to start in this application, please, give me your trainer name.</p>
          <form className="home__form" onSubmit={handleSubmit}>
              <input className="home__input" ref={trainerNameRef} type="text" />
              <button className="home__button">Catch them all</button>
          </form>
        </div>
        <footer className="home__fotter">
          <img src="./imge/footerpokedex.svg" alt="" />
        </footer>
    </main>
  )
}

export default Home