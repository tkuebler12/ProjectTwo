//using pokemon sdk
const pokemon =  require('pokemontcgsdk');

pokemon.configure({apiKey: '12e417e968-a16c-4330-bba3-93de7507eeb1'});


module.exports = (app) => {
   app.get('/api/character/:q', (req, res) => {
        pokemon.card.all(req.params)
        .then(card => {
            res.json(card) // "Charizard"
        })
    })
    
    app.get('/api/sets/:name', (req, res) => {
        pokemon.card.all(`{q: ‘name: ${req.params.name}’}`)

    .then((cards) => {
        console.log(cards)
       res.json(cards) // "Base"
    })
})

app.get('/api/allsets/:q', (req, res) => {
    pokemon.set.all({ q: 'series:base' })
    .then((cards) => {
        console.log(cards[0].name) // "Base"
    })
})

    }
