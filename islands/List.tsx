/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { useList } from "../utils/list.ts";
import PokemonCard from "../src/PokemonCard.tsx";

export default function List() {
  const [pokemons] = useList();

  return (
    <div class={tw`grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-2`}>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
