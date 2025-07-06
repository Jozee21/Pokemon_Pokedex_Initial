const pokemonInput = document.getElementById("search-input");
const pokemonSearchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonType = document.getElementById("types");
const pokemonHP = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");
const description =
document.getElementById("description");

pokemonSearchBtn.addEventListener("click", async () => {
    let query = pokemonInput.value.trim().toLowerCase();
    if (!query) {
        alert("Pokémon not found");
        return;
    }

    try {
        let response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`);
        
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        let pokemon = await response.json();

pokemonName.textContent = pokemon.name.toUpperCase();
        pokemonId.textContent = `#${pokemon.id}`;
        pokemonWeight.textContent = pokemon.weight;
        pokemonHeight.textContent = pokemon.height;
        pokemonHP.textContent = pokemon.stats[0].base_stat;
        pokemonAttack.textContent = pokemon.stats[1].base_stat;
        pokemonDefense.textContent = pokemon.stats[2].base_stat;
        pokemonSpAttack.textContent = pokemon.stats[3].base_stat;
        pokemonSpDefense.textContent = pokemon.stats[4].base_stat;
        pokemonSpeed.textContent = pokemon.stats[5].base_stat;

        pokemonType.innerHTML = "";
        pokemon.types.forEach(typeObj => {
            let typeElement = document.createElement("span");
            typeElement.textContent = typeObj.type.name.toUpperCase();
            pokemonType.appendChild(typeElement);
        });

    spriteContainer.innerHTML = `<img id="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name} sprite">`;

    } catch (error) {
        alert("Pokémon not found");
    }
});
