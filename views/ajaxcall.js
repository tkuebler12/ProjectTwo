<div id="pokemon"></div>

var queryURL = "https://pokeapi.co/api/v2/pokemon/ditto";

function searchPokemon() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response);

        var pokemonName = $("h1").text(response.name);
        
        $("#pokemon").text(JSON.stringify(response));
    });
};