const HCard = () => {
  return (
    <Link href={exploreLink}>
      <Center>
        <Box
          w={300}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <Center>
            <Image src={sprites.front_default} alt={name} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  beds &bull; baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {name}
              </Box>

              <Box>
                {name}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {name} reviews
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </Link>
  );
};

export default HCard;
