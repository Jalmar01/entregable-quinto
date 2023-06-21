import PokeCard from "./PokeCard"

const PokeContainers = ({pokemons}) => {


  return (
    <div className="pokecard__container">
        {
            pokemons?.map(pokemon => (
                    <PokeCard 
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
        }
    </div>
  )
}

export default PokeContainers