const router = require('express').Router()

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

module.exports = (app) => {
  app.get('/api/pokecard/:name', (req, res) => {
    P.getPokemonByName(req.params.name)
       .then(P => {
           res.json(P) 
       })   
  })
}


