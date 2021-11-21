import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokeList from "../../components/poke-list";
import { getFeaturedPokemon } from "../../helpers/api-util";

const FilteredPokemons = () => {
  const [pokemons, setPokemons] = useState();
  const router = useRouter();
  const filteredData = router.query.slug;

  useEffect(() => {
    getFeaturedPokemon()
      .then((data) => setPokemons(data))
      .catch((e) => console.log(e));
  }, []);

  if (!pokemons) {
    return (
      <Box w={"full"} h={"800px"}>
        <Flex justify="center">
          <Spinner color="#FF452B" />
        </Flex>
      </Box>
    );
  }

  const filteredType = filteredData[0];
  const filteredAbility = filteredData[1] === "null" ? null : filteredData[1];

  const filteredPokemons = pokemons.filter((pokes) => {
    let filterPoke = [];
    if (filteredType && !filteredAbility) {
      filterPoke = pokes.types.some((p) => p.type.name === filteredType);
    } else if (!filteredType && filteredAbility) {
      filterPoke = pokes.abilities.some(
        (p) => p.ability.name === filteredAbility
      );
    } else if (filteredType && filteredAbility) {
      filterPoke =
        pokes.types.some((p) => p.type.name === filteredType) &&
        pokes.abilities.some((p) => p.ability.name === filteredAbility);
    }
    console.log("filterPoke", filterPoke);
    return filterPoke;
  });

  return (
    <Box m={10} p={20}>
      <Heading fontWeight={500} align="center" mb={100} color="#FF452B">
        Result of: {filteredType} {filteredAbility}
      </Heading>
      {filteredPokemons.length === 0 ? (
        <Heading textAlign="center">No matches found</Heading>
      ) : (
        <PokeList items={filteredPokemons} />
      )}
    </Box>
  );
};

export default FilteredPokemons;
