import { HandlerContext } from "$fresh/server.ts";
import { DB, TOKEN } from "../../utils/env.ts";

export const handler: HandlerType = async (req, _ctx) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("q") || "";
  const filter = query.length
    ? `&filter[name][_contains]=${encodeURIComponent(query)}`
    : "";

  const pokemons = await fetch(
    `https://${DB}.directus.app/items/pokemon?access_token=${TOKEN}&limit=9${filter}`
  ).then((res) => res.json());

  return new Response(
    JSON.stringify(
      pokemons.data.map((p: Pokemon) => ({
        ...p,
        image: `https://${DB}.directus.app/assets/${p.image}?access_token=${TOKEN}`,
      }))
    )
  );
};
