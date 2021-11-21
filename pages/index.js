import { getAllPokemon, getFeaturedPokemon } from "../helpers/api-util";
import PokeList from "../components/poke-list";
import { Box, Center } from "@chakra-ui/react";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import PokemonSearch from "../components/ui/PokemonSearch";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  function findPokeHandler(type, ability) {
    const fullPath = `/pokemon/${type}/${ability}`;
    router.push(fullPath);
  }
  return (
    <Box m={5} p={5}>
      <Heading fontWeight={500} align="center" mb={100} color="#FF452B">
        Featured Pokemon
      </Heading>
      <SimpleGrid
        justifyContent="space-around"
        minChildWidth="150px"
        spacing={"20px"}
        mb="150px"
      >
        <PokemonSearch
          onSearch={findPokeHandler}
          cbxTypes={props.cbxTypes}
          cbxAbilities={props.cbxAbilities}
        />
      </SimpleGrid>
      <PokeList items={props.pokemons} />
    </Box>
  );
}

export async function getStaticProps() {
  const allPokemons = await getFeaturedPokemon();
  const cbxTypes = [];
  const cbxAbilities = [];

  for (const poke of allPokemons) {
    for (const abilities of poke.abilities) {
      cbxAbilities.push(abilities.ability.name);
    }

    for (const types of poke.types) {
      cbxTypes.push(types.type.name);
    }
  }
  return {
    props: {
      pokemons: allPokemons,
      cbxTypes: [...new Set(cbxTypes)],
      cbxAbilities: [...new Set(cbxAbilities)],
    },
  };
}
