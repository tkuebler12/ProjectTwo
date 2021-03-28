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
}



// $( document ).ready(function() {
//     let endpoint = 'https://api.linkpreview.net'
//     let apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'
//     $( ".content a" ).each(function( index, element ) {
//       $.ajax({
//           url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
//           contentType: "application/json",
//           dataType: 'json',
//           success: function(result){
//               console.log(result);
//           }
//       })
//     });
//   });



// $(document).ready(function()
//     $('#Button1').bind('click', function () { 
//         // This grabs the page you are in so that you can call it correctly
//         var pagePath = window.location.pathname;  
//         var testId = $("#some_div").val();
//         var url = pagePath + "/TestService";          
//         $.post(url, { id: testId },
//             function (data) {
//                 showAlert(data);
//             }
//         });
//     };
// });



// const apiData = {
//     url: 'https://pokeapi.co/api/v2/',
//     type: 'pokemon',
//     id: '25',
// }

// const {url, type, id} = apiData

// const apiUrl = `${url}${type}/${id}`

// fetch(apiUrl)
//     .then( (data) => {
//         if(data.ok){
//             return data.json()
//         }
//         throw new Error('Response not ok.'); 
//     })
//     .then( pokemon => generateHtml(pokemon))
//     .catch( error => console.error('Error:', error))


// const generateHtml = (data) => {
//     console.log(data)
//     const html = `
//         <div class="name">${data.name}</div>
//         <img src=${data.sprites.front_default}>
//         <div class="details">
//             <span>Height: ${data.height}</span>
//             <span>Weight: ${data.weight}</span>
//         </div>
//     `
//     const pokemonDiv = document.querySelector('.pokemon')
//     pokemonDiv.innerHTML = html