import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useRef } from "react";

const PokemonSearch = (props) => {
  const typeInputRef = useRef();
  const abilityInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const selectedType = typeInputRef.current.value || null;
    const selectedAbility = abilityInputRef.current.value || null;
    props.onSearch(selectedType, selectedAbility);
  }
  return (
    <>
      <Box>
        <Stack direction={"row"} alignItems="center" spacing={5}>
          <Text htmlFor="type" color={"#FF452B"} fontWeight={600}>
            Type
          </Text>
          <Select id="type" ref={typeInputRef}>
            {props.cbxTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Text htmlFor="month" color="#FF452B" fontWeight={600}>
            Ability
          </Text>
          <Select id="month" ref={abilityInputRef} placeholder="Select option">
            {props.cbxAbilities.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>
        </Stack>
      </Box>
      <Button onClick={submitHandler} colorScheme="houm" fontWeight={600}>
        Find Poke
      </Button>
    </>
  );
};

export default PokemonSearch;
