
import pokemones from '../PokeInfo'
import PokeCard from '../Components/PokeCard'

export const Home = () => {
  return (
    <div className='container'>
        {pokemones.map(pokemon=>(
            <PokeCard key={pokemon.nombre} personaje={pokemon} />
        ))}
    </div>
  )
}

export default Home