/*$('#search-button').on('click', (event) => {
    event.preventDefault();
    let name = $('#pokename').val().trim();
    if (name === '') return;
*/

    $.ajax({
        url: "https://api.pokemontcg.io/v2/cards",
        method: 'GET'
    }).then(data => {
        console.log(data)
        
    }) 
