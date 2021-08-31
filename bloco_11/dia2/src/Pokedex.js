import Pokemon from './Pokemon';

function Pokedex(props) {
  return(
    props.pokemons.map((mon) => < Pokemon pokemon={mon} />)
  );
}

export default Pokedex;
