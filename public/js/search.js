//Adding cards element

async function newPokemonCard(event) {

    const pokemon_name = document.querySelector('#pokemon_name').value.trim();
    if (!pokemon_name) return;
    console.log(pokemon_name);
    // const pokemon_image = document.querySelector('#pokemon_image').value;
    // const pokemon_description = document.querySelector('#pokemon_description').value;
    async function getCards() {
        const response = await fetch(`/api/pokemon/${pokemon_name}`)
        const cards = response.json();
        return cards;
    }
    getCards().then(cards => {
        for (let i = 0; i < cards.length; i++) {
            console.log(cards[i]);

        }
    });

    

    
    //console.log(cards);
    // if (response.ok) {
    //     const cards = response.json();
    // } else {
    //     alert("Error!");
    // }
}

document.querySelector('#search-btn').addEventListener('click', newPokemonCard);