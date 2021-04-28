
    $(document).ready(function(){
        $("#searchButton").on("click", function(){
            var input = $("#userInput").val();
            console.log(input);
            getPokemon(input);
            $(".history").on("click", "li", function(){
                getPokemon($(this).text());
            })
        })
        function makeRow(text) {
            var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
            $(".history").append(li);
        }
        function getPokemon(userInput) {
            var queryURL = "https://api.pokemontcg.io/v2/cards?q=!name:"+ userInput + "&appid=9a554248-6793-4d43-8dfa-1faafabd553f";
            $.ajax({
                url: queryURL,
                method:"GET"
            }).then(function(response) {
            //    add for loop here

            // pull poke name, image and description
            
                $(".card-title").html("<h1>" + response.name + "-" + " Pokemon Name</h1>");
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
       
    var searchHistory = JSON.parse(window.localStorage.getItem("history")) || [];
    if (searchHistory > 0) {
        getPokemon(searchHistory[searchHistory.length - 1])
    }
    for (var i = 0; i < searchHistory.length; i++) {
        makeRow(searchHistory[i])
    }
    }
     $.ajax({
            url: "https://api.pokemontcg.io/v2/cards",
            method: 'GET',
            headers: { "APIkey": apiKey = '9a554248-6793-4d43-8dfa-1faafabd553f'},
        }).then(data => {
            console.log(data)
        })
    });

