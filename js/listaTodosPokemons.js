// js/listaTodosPokemons.js
import { TipoPokemon } from './TipoPokemon.js';
import { Pokemon } from './Pokemon.js'; // Importa a classe Pokemon

// Suas instâncias de Pokémon
const bulbasaur = new Pokemon(
    "1", "Bulbasaur", TipoPokemon.GRAMA, TipoPokemon.VENENO, "0.7 m", "6.9 kg",
    ["Overgrow", "Chlorophyll"],
    "Bulbasaur é um Pokémon do tipo planta/veneno. Ele é conhecido por sua habilidade de absorver luz solar e crescer.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
);

const ivysaur = new Pokemon(
    "2", "Ivysaur", TipoPokemon.GRAMA, TipoPokemon.VENENO, "1.0 m", "13.0 kg",
    ["Overgrow", "Chlorophyll"],
    "Ivysaur é a forma evoluída de Bulbasaur, com uma planta maior em suas costas.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
);

const venusaur = new Pokemon(
    "3", "Venusaur", TipoPokemon.GRAMA, TipoPokemon.VENENO, "2.0 m", "100.0 kg",
    ["Overgrow", "Chlorophyll"],
    "Venusaur é a forma final de Bulbasaur, com uma grande flor em suas costas.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
);

const charmander = new Pokemon(
    "4", "Charmander", TipoPokemon.FOGO, null, "0.6 m", "8.5 kg",
    ["Blaze", "Solar Power"],
    "Charmander é um Pokémon do tipo fogo, conhecido por sua chama na cauda.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
);

const charmeleon = new Pokemon(
    "5", "Charmeleon", TipoPokemon.FOGO, null, "1.1 m", "19.0 kg",
    ["Blaze", "Solar Power"],
    "Charmeleon é a forma evoluída de Charmander, mais agressivo e com uma chama maior.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
);

const charizard = new Pokemon(
    "6", "Charizard", TipoPokemon.FOGO, TipoPokemon.VOADOR, "1.7 m", "90.5 kg",
    ["Blaze", "Solar Power"],
    "Charizard é a forma final de Charmander, capaz de voar e soltar chamas poderosas.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
);

const squirtle = new Pokemon(
    "7", "Squirtle", TipoPokemon.AGUA, null, "0.5 m", "9.0 kg",
    ["Torrent", "Rain Dish"],
    "Squirtle é um Pokémon do tipo água, conhecido por sua carapaça dura.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
);

const wartortle = new Pokemon(
    "8", "Wartortle", TipoPokemon.AGUA, null, "1.0 m", "22.5 kg",
    ["Torrent", "Rain Dish"],
    "Wartortle é a forma evoluída de Squirtle, com orelhas maiores e uma cauda mais longa.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
);

const blastoise = new Pokemon(
    "9", "Blastoise", TipoPokemon.AGUA, null, "1.6 m", "85.5 kg",
    ["Torrent", "Rain Dish"],
    "Blastoise é a forma final de Squirtle, com canhões de água em suas costas.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
);

const pikachu = new Pokemon(
    "25", "Pikachu", TipoPokemon.ELETRICO, null, "0.4 m", "6.0 kg",
    ["Static", "Lightning Rod"],
    "Pikachu é um Pokémon do tipo elétrico, conhecido por sua habilidade de gerar eletricidade.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
);

const raichu = new Pokemon(
    "26", "Raichu", TipoPokemon.ELETRICO, null, "0.8 m", "30.0 kg",
    ["Static", "Lightning Rod"],
    "Raichu é a forma evoluída de Pikachu, com uma cauda longa e mais eletricidade.",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
);

export const lista_pokemons = [
    bulbasaur, ivysaur, venusaur,
    charmander, charmeleon, charizard,
    squirtle, wartortle, blastoise,
    pikachu, raichu
];