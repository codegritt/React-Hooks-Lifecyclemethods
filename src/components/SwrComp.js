import React from "react";
import useSWR from "swr";
import { Pokemon } from "./pokemon";

const url = "https://pokeapi.co/api/v2/pokemon";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function SwrComp() {
  const { data: result, error } = useSWR(url, fetcher);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  return (
    <div>
      <center>
        <h3>Using Swr react library</h3>
        {result.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </center>
    </div>
  );
}

export default SwrComp;
