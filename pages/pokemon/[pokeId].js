import {
  getAllPokemon,
  getFeaturedPokemon,
  getPokemonDetail,
} from "../../helpers/api-util";

export default function PokemonDetailPage(props) {
  const pokemon = props.pokemon;
  return <div>{pokemon.id}</div>;
}

export async function getStaticProps(context) {
  const pokeId = context.params.pokeId;
  const pokemon = await getPokemonDetail(pokeId);
  return {
    props: {
      pokemon,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const pokemon = await getFeaturedPokemon();
  const paths = pokemon.map((poke) => ({
    params: { pokeId: poke.id.toString() },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
