import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokedexName.css'

const PokedexName = () => {

   const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
   const [ pokemon, getPokemonByName, hasError ] = useFetch(url)

   useEffect(() => {
    getPokemonByName()
   }, [name])

   console.log(pokemon)

  return (
    <div>
      {
        hasError
        ? <h1>❌ the pokemon "<span>{name}</span>" doesn't exist</h1>
        :(
           <article className="pokename__container-principal">
                 <header className="pokename__header">
                     <img src="./imge/logo.svg" alt="logo" />
                 </header>
                 <div className="pokename__container-dv" >
                 <section className="pokename__container">
                    <div className={`pokename__img bg-${pokemon?.types[0].type.name}`}>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="poke-Img" />
                    </div>
                      
                      <div className="pokename__conatine-name">
                         <h1 className={`pokename__number ${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
                         <div className="pokename__conatine-name--linea">
                              <div className={`pokename__linea bg-${pokemon?.types[0].type.name}`}></div>
                                <h2 className={`pokename__name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                              <div className={`pokename__linea bg-${pokemon?.types[0].type.name}`}></div>
                         </div>
                      </div>
                    <ul className="pokename__containe-wh">
                        <li className="pokename__weight"><span className={`${pokemon?.types[0].type.name}`}>Weight</span>{pokemon?.weight}</li>
                        <li className="pokename__height"><span className={`${pokemon?.types[0].type.name}`}>Height</span>{pokemon?.height}</li>
                    </ul> 
                  </section>
                  <section className="pokename__container-ta">
                     <div>
                       <h3 className={`${pokemon?.types[0].type.name}`}>Types</h3>
                        <ul  className="pokename__types-info">
                            {
                              pokemon?.types.map(typeInfo => (
                                <li 
                                    className={`bg-${typeInfo.type.name}`}
                                    key={typeInfo.type.url}
                                > {typeInfo.type.name}</li>
                                ))
                            }
                        </ul>
                     </div>

                     <div>
                        <h3 className={`${pokemon?.types[0].type.name}`}>Abilities</h3>
                        <ul className="pokename__abilities-info">
                            {
                              pokemon?.abilities.map(skillInfo => (
                                <li    
                                    key={skillInfo.ability.url}
                                > {skillInfo.ability.name}</li>
                                ))
                              }
                          </ul> 
                     </div>
                    
                  </section>

                  <section className="pokename__container-stats">
                        <div className="pokename__container-linea" >
                          <h3 className={`pokename__stats-title ${pokemon?.types[0].type.name}`}>Stats</h3>
                          <div className={`pokename__stats-linea bg-${pokemon?.types[0].type.name}`}></div>
                        </div>
                    { <ul className="pokename__stats">
                          {
                            pokemon?.stats.map(statInfo => (
                              <li   className="pokename__stats-info"
                                    key={statInfo.stat.url}>
                                    <p className={`pokename__stats-label ${pokemon?.types[0].type.name}`}>{statInfo.stat.name}</p>
                                    <p className={`pokename__stats-value  ${pokemon?.types[0].type.name}`}>{statInfo.base_stat}/250</p>
                                  <div className="pokename__barra-padre">
                                    <div 
                                          //style={"width:calc(`${statInfo.base_stat}/250*100%`)"}
                                         className={`pokename__barra-hijo bg-${pokemon?.types[0].type.name}`}>
                              
                                    {/* style={{width:calc(`${statInfo.base_stat}/250*100%`)}} */}
                                    </div>
                                  </div>
                              </li> 
                              
                            ))
                          }
                      </ul> 
                    }
                  </section>
                 </div>

                  <section className="pokename__container-moves--general">
                      <div className="pokename__container-moves">
                       <div className="pokename__container-moves--linea" >
                          <h3 className={`pokename__moves-title ${pokemon?.types[0].type.name}`}>moves</h3>
                          <div className={`pokename__moves-linea bg-${pokemon?.types[0].type.name}`}></div>
                        </div>
                         <ul className="pokename__moves-ul">
                              {
                                pokemon?.moves.map(moveInfo => (
                                  <li   className={`bg-${pokemon?.types[0].type.name}`}
                                        key={moveInfo.move.url}>
                                        <span>{moveInfo.move.name}</span>
                                    </li> 
                                ))
                              }
                          </ul> 
                      </div>
                  </section> 
           </article>
          )
      }
        
    </div>
  )
}

export default PokedexName