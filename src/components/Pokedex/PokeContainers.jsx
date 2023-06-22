import PokeCard from "./PokeCard"
import './styles/PokeContainers.css'

const PokeContainers = ({pokemons, initialItems, setInitialPage, initialPage, contentPerPage}) => {


  const previousPage = () => {
    setInitialPage((previouPage) => previouPage -1)
  }

  const nextsPage = () => {
    setInitialPage((nextPage) => nextPage +1)
  }



  return (
    <>
    <div className="pokecard__container">
        {
            initialItems?.map(pokemon => (
                    <PokeCard 
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
        }
       </div>
       <div className="pokecontainer__container">
          <button
           className="pokecontainer__btn" 
           onClick={previousPage}
           disabled={initialPage ===1}>
          
            Previous
          </button>
          <span className=" pokecontainer__span">{initialPage}</span>
          <button 
           
            className=" pokecontainer__btn"
            onClick={nextsPage}
            disabled={initialItems?.length < contentPerPage}>
           
            Next
          </button>
       </div>
    </>
  )
}

export default PokeContainers