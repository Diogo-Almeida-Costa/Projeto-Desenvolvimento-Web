import { lista_pokemons } from './listaTodosPokemons.js';
import { TipoPokemon } from './TipoPokemon.js'; 
import { Pokemon } from './Pokemon.js';


function criarCardPokemonHTML(pokemon) 
{
    let tiposHTML = '';
    if (pokemon.tipo1) {
        tiposHTML += `<span class="badge ${pokemon.getTipoCssClass(pokemon.tipo1)}">${pokemon.tipo1}</span>`;
    }
    if (pokemon.tipo2) {
        tiposHTML += ` <span class="badge ${pokemon.getTipoCssClass(pokemon.tipo2)}">${pokemon.tipo2}</span>`;
    }

    return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4"> <div class="card pokeCard h-100">
                <img src="${pokemon.imagemUrl}" class="card-img-top poke-image" alt="${pokemon.nome}">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="card-title poke-name">${pokemon.nome}</h5>
                    <div class="tipos mb-2">
                        ${tiposHTML}
                    </div>
                    <p class="card-text poke-description flex-grow-1">${pokemon.descricao}</p>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const pokemonCardContainer = document.getElementById('pokemonCardContainer');

    if (pokemonCardContainer) {
        lista_pokemons.forEach(pokemon => {
            pokemonCardContainer.innerHTML += criarCardPokemonHTML(pokemon);
        });
    } else {
        console.error("Elemento com ID 'pokemonCardContainer' não encontrado no DOM.");
    }
});