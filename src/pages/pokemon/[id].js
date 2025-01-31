import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const pokemonData = {
  ivysaur: {
    name: "Ivysaur",
    image: "/baby-dragon-1.png",
    type: "fire, flying",
    stats: "hp, attack, defense, special-attack, special-defense, speed",
    abilities: "blaze, solar-power",
    moves: "mega-punch, fire-punch, thunder-punch, scratch, swords-dance",
  },
  bulbasaur: {
    name: "Bulbasaur",
    image: "/baby-dragon-2.png",
    type: "grass, poison",
    stats: "hp, attack, defense, special-attack, special-defense, speed",
    abilities: "overgrow, chlorophyll",
    moves: "tackle, vine-whip, razor-leaf, sleep-powder",
  },
  venusaur: {
    name: "Venusaur",
    image: "/baby-dragon-3.png",
    type: "grass, poison",
    stats: "hp, attack, defense, special-attack, special-defense, speed",
    abilities: "overgrow, chlorophyll",
    moves: "tackle, vine-whip, razor-leaf, sleep-powder",
  },
};

export default function PokemonDetail() {
  const router = useRouter();
  const { id } = router.query;
  const pokemon = pokemonData[id];

  if (!pokemon) {
    return (
      <p className="text-center text-gray-500 mt-10">Pokemon not found!</p>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md mt-10">
      <Link href="/" className="text-green-500 text-sm mb-4">
        &lt; Back
      </Link>

      <div className="bg-green-100">
        <div className="w-full flex justify-center p-4">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        </div>
        <div className="bg-yellow-100 p-4">
          <p>
            <strong>Name:</strong> {pokemon.name}
          </p>
          <p>
            <strong>Type:</strong> {pokemon.type}
          </p>
          <p>
            <strong>Stats:</strong> {pokemon.stats}
          </p>
          <p>
            <strong>Abilities:</strong> {pokemon.abilities}
          </p>
          <p>
            <strong>Some Moves:</strong> {pokemon.moves}
          </p>
        </div>
      </div>
    </div>
  );
}
