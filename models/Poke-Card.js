$('#search-button').on('click', (event) => {
    event.preventDefault();
    let name = $('#pokename').val().trim();
    if (name === '') return;


    $.ajax({
        url: `/api/sets/${name}`,
        method: 'GET'
    }).then(data => {
        //display this for the user
        
    }) 
})