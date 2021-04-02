const apiKey = "9a554248-6793-4d43-8dfa-1faafabd553f";
   
//     $.ajax({
//             url: "https://api.pokemontcg.io/v2/cards",
//             method: 'GET',
//             headers: { "APIkey": apiKey },
//         }).then(data => {

//             console.log(data)
            
//         })

//         $('#search-button').on('click', (event) => {
//             event.preventDefault();
//             let name = $('#pokename').val().trim();
//             if (name === '') return;
//     })


$(document).ready(function(){
    $("#searchButton").on("click", function(){
        var userInput = $("#userInput").val();
        console.log(userInput);
        getPokemon(userInput);
        $(".history").on("click", "li", function(){
            getPokemon($(this).text());
        })

    })
    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    }
    function getPokemon(userInput) {

        var queryURL = "https://api.pokemontcg.io/v2/cards"+ userInput;
        $.ajax({
            url: queryURL,
            method:"GET",
            headers: { "APIKey": apiKey },
        }).then(function(response) {
            if (searchHistory.indexOf(userInput) === -1) {
                searchHistory.push(userInput);
                window.localStorage.setItem("history", JSON.stringify(searchHistory));
                makeRow(userInput);
            }
            var date = new Date().toLocaleDateString("en-US").split(":");
            $(".name").html("<h1>" + response.name + "-" + " Pokemon Name</h1>");
            $(".description").text("Description: " + (response.main.description));
            $(".power").text("Special Power: " + response.main.power);
            $(".date").text("Date: " + response.date);
            console.log(response);
            var image = $("<img>").attr("src", "https://api.pokemontcg.io/v2/cards" + response.card[0] + ".png");
            var div = $("<div>");
            div.append(image);
            var results = $("#results");
            results.html("<img src='https://api.pokemontcg.io/v2/cards'>");
            results.append(image);
            getPokemonDescription(userInput);
            getPokemon(response.coord.lat, response.coord.lon);

        });
    }
    function getPokemon(userInput) {
        var queryURL = "https://api.pokemontcg.io/v2/cards" + userInput;
        $.ajax({
            url: queryURL,
            method:"GET",
            headers: { "APIKey": apikey }
        }).then(function(response) {
            $(".name").html("<h4>Name</h4>").append("<div class=\"row\">");
            console.log(response); 
            for (var i = 0; i < response.list.length; i++){
                if (response.list[i].dt_txt.indexOf("") !== -1) {
                    var col = $("<div>").addClass("col-md-2");
                    var card = $("<div>").addClass("card bg-primary text-white");
                    var body = $("<div>").addClass("card-body p-2");
                    var title = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString());
                    var image = $("<img>").attr("src", "https://api.pokemontcg.io/v2/cards" + response.list[i].name[0] + ".png");
                    var p1 = $("<p>").addClass("card-text").text("Description: " + response.list[i].main.description);
                    var p2 = $("<p>").addClass("card-text").text("Special Power: " + response.list[i].main.power);
                    col.append(card.append(body.append(title, image, p1, p2)));
                    $(".name .row").append(col);
                }
            }
        });
    }
var searchHistory = JSON.parse(window.localStorage.getItem("history")) || [];
if (searchHistory > 0) {
    getPokemon(searchHistory[searchHistory.length - 1])
}
for (var i = 0; i < searchHistory.length; i++) {
    makeRow(searchHistory[i])
}
})