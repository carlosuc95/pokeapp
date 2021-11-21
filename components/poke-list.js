import { SimpleGrid } from "@chakra-ui/layout";
import PokeItem from "./poke-item";

export default function PokeList({ items }) {
  return (
    <SimpleGrid justifyContent="center" minChildWidth="360px" spacing="40px">
      {items.map((event) => (
        <PokeItem key={event.id} data={event} />
      ))}
    </SimpleGrid>
  );
}
