//using pokemon sdk
const pokemon = require('pokemontcgsdk');

pokemon.configure({apiKey: '12e417e968-a16c-4330-bba3-93de7507eeb1'});


module.exports = (app) => {
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