const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

module.exports = (app) => {
  app.get('/api/pokemon/:id', (req, res) => {
    P.getPokemonByName(req.params.id)
       .then(P => {
           res.json(P) 
       })   
  })
}


