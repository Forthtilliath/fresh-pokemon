/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { useList } from "../utils/list.ts";
import { AddToListProps } from "../utils/types.ts";

export default function AddToList({ pokemon }: AddToListProps) {
  const [_, add] = useList();

  return (
    <button
      class={tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`}
      onClick={() => add(pokemon)}
      disabled={!IS_BROWSER}
    >
      Add To List
    </button>
  );
}
