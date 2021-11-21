import { getFeaturedPokemon } from "../../helpers/api-util";

export default function AllPokemonPage(props) {
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/pokemon/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const allPokemons = await getFeaturedPokemon();
  return {
    props: {
      pokemons: allPokemons,
    },
  };
}
