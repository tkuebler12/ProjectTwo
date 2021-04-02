//using pokemon sdk
const pokemon = require('pokemontcgsdk');

pokemon.configure({apiKey: '12e417e968-a16c-4330-bba3-93de7507eeb1'});


module.exports = (app) => {
 /*  app.get('/api/character/:id', (req, res) => {
        pokemon.card.find(req.params.id)
        .then(card => {
            res.json(card) // "Charizard"
        })
    })*/
    
    app.get('/api/sets/:q', (req, res) => {
        pokemon.set.all(req.params.q)
    .then((cards) => {
        res.json(cards) // "Base"
    })
})
    }
