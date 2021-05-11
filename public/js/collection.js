async function newFormHandler(event) {
    event.preventDefault();

    const pokemon_card = document.querySelector('#pokemon_card').value;


    const response = await fetch('/routes/api/', {
        method: 'GET',
        body: JSON.stringify({
            pokemon_card
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }) ;

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Please enter a valid Pokemon');
    }
}

document.querySelector('.new-pokemon-card').addEventListener('submit', newFormHandler);