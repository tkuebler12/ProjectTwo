//using pokemon sdk
const pokemon = require('pokemontcgsdk');

pokemon.configure({apiKey: '9a554248-6793-4d43-8dfa-1faafabd553f'});


module.exports = (app) => {
    app.get('/api/character/:name', (req, res) => {
        pokemon.card.find(req.params.name) 
        .then(card => {
            res.json(card) // "Charizard"
        })   
    })



    app.get('/api/character/:id', (req, res) => {
        pokemon.card.find(req.params.id) 
        .then(card => {
            res.json(card) // "Charizard"
        })   
    })


   /* app.get('/api/sets', (req, res) => {
        pokemon.sets.all({ q: 'series:base' })
    .then((cards) => {
        res.json(cards) // "Base"
    }) 
    })

   /* app.get('/api/cards/', (req, res) => {
        pokemon.card.all({ q: 'name: Blastoise' })
    .then((cards) => {
        res.catch(cards) // "Blastoise"
    })
    })*/
} 