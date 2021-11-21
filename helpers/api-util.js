export const getAllPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
  );
  const data = await response.json();

  console.log("data poke: ", data);
  const pokemons = [];
  for (const key in data) {
  }

  return data;
};

export const getFeaturedPokemon = async () => {
  const featuredPokemon = [];
  for (let i = 1; i <= 21; i++) {
    const pokemon = await getPokemonDetail(i);
    featuredPokemon.push(pokemon);
  }
  return featuredPokemon;
};

export const getPokemonDetail = async (id) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((pokeData) => {
      const pokemon = {
        id: pokeData.id,
        name: pokeData.name,
        height: pokeData.height,
        weight: pokeData.weight,
        sprites: pokeData.sprites,
        types: pokeData.types,
        abilities: pokeData.abilities,
        hp: pokeData.stats[0].base_stat,
      };
      return pokemon;
    })
    .catch((e) => console.log(e));
