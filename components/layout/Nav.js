import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { Box, Flex, Heading, Spacer, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/image";

const Nav = () => {
  const router = useRouter();
  return (
    <Box p={7} boxShadow="0 2px 4px 0 rgba(0,0,0,.2)">
      <Flex>
        <Box p="2">
          <Stack direction="row" alignItems="center">
            <Image
              w="50px"
              h="50px"
              src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795ipeio.png"
            />
            <Heading size="md" color="#FF452B">
              <Link href="/" textDecoration="none">
                Poke APP
              </Link>
            </Heading>
          </Stack>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="houm" onClick={() => router.push("/")}>
            Home
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Nav;
