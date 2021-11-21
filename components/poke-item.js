import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Progress } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";

export default function PokeItem({ data }) {
  const { id, sprites, name, types, height, weight, abilities, hp } = data;
  const exploreLink = `/pokemon/${id}`;
  const pokemonHpMax = 110;
  const percentageHp = (hp * 100) / pokemonHpMax;

  return (
    <Center>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        // css={{ border: "4px solid gray" }}
      >
        <Box
          h={"120px"}
          w={"full"}
          bgGradient="linear(to-r, #eb3349, #f45c43)"
          objectFit={"cover"}
          css={{ borderBottom: "6px solid #58585A" }}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            bg={"gray.100"}
            src={sprites.front_default}
            alt={name}
            css={{ border: "4px solid white" }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={2} align={"center"} mb={5}>
            <Heading
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
              css={{ textTransform: "capitalize" }}
            >
              {name} &bull; #n°{id}
            </Heading>
            <Stack direction={"row"} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.500"}>
                HP {hp}
              </Text>
              <Progress
                w={200}
                value={percentageHp}
                size="xs"
                colorScheme="green"
              />
            </Stack>
            <Text color={"gray.500"} css={{ textTransform: "capitalize" }}>
              {types.map((t, i) =>
                i === types.length - 1 ? (
                  t.type.name
                ) : (
                  <span key={i}>{t.type.name} &bull; </span>
                )
              )}
            </Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6} mb={10}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{height}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Height
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{weight}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Weight
              </Text>
            </Stack>
          </Stack>
          <Stack direction={"row"} justify={"start"} spacing={6}>
            <Text fontSize={"sm"} color={"gray.500"}>
              Abilities:
            </Text>
            <Text fontSize={"sm"} fontWeight={600}>
              {abilities.map((a, i) =>
                i === abilities.length - 1 ? (
                  a.ability.name
                ) : (
                  <span key={i}>{a.ability.name} &bull; </span>
                )
              )}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
