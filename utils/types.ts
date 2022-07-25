import { HandlerContext } from "$fresh/server.ts";

export type HandlerType = (
  req: Request,
  _ctx: HandlerContext
) => Promise<Response>;

export type Pokemon = {
  id: string;
  name: string;
  type: string[];
  hp: string;
  attack: string;
  defense: string;
  special_attack: string;
  special_defense: string;
  speed: string;
  image: string;
};

export type HomeProps = {
  pokemons: Pokemon[];
  query: string;
};

export type PokemonCardProps = {
  pokemon: Pokemon;
  allowAdd?: boolean;
};

export type DetailsProps = {
  pokemon: Pokemon;
};

export type AddToListProps = {
  pokemon: Pokemon;
};
