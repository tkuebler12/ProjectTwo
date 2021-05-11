async function newPokemonCard(event) {

    const pokemon_name = document.querySelector('#pokemon_name').value.trim;
    if (!pokemon_name) return;
        
    // const pokemon_image = document.querySelector('#pokemon_image').value;
    // const pokemon_description = document.querySelector('#pokemon_description').value;

    const response = await fetch(`/api/pokemon/${pokemon_name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        console.log(response.json());
    } else {
        alert("Error!");
    }
}

document.querySelector('#search-btn').addEventListener('click', newPokemonCard);