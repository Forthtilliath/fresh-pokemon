import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";
config({ export: true });

export const DB = Deno.env.get("DB");
export const TOKEN = Deno.env.get("TOKEN");
