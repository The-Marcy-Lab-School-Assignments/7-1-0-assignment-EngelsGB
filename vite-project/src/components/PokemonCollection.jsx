import PokemonCard from './PokemonCard';

// TODO: import the PokemonContext and useContext
import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const allPokemon = useContext(PokemonContext).allPokemon;

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} front={pokemon.front} back={pokemon.back} name={pokemon.name} hp={pokemon.hp} />)}
        </div>
    )
}

export default PokemonCollection