
const apiKey = "9a554248-6793-4d43-8dfa-1faafabd553f";
   
$.ajax({
        url: "https://api.pokemontcg.io/v2/cards",
        method: 'GET',
        headers: { "APIkey": apiKey },
    }).then(data => {
        console.log(data)
        
    })