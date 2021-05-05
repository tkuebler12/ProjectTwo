// const router = require('express').Router()

// const pokemon = require('pokemontcgsdk');

// const { Pokemon } = require('../../models');

// // "/api/pokecard"

// //pulls all the cards
// module.exports = (app) => {
//   app.get('/:name', (req, res) => {
//     pokemon.card.all(req.params.name)
//       .then(cards => {
//         //console.log(cards);
//         cards.forEach(element => {
//           Pokemon.create({ name: element.name, images: element.images.small })
//         });

//         // var temp = cards.filter((c) => c.name === req.params.name);
//         // console.log("temp: ", +temp);
//         res.json(cards);
//       })
//   })
// }



const router = require("express").Router();
const { Pokemon } = require("../../models");
module.exports = (app) => {
  app.get('/PokeCard/:name', (req, res) => {
    Pokemon.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(e => res.json(e));
  });
}


/*router.post('/', withAuth, async (req, res) => {
  try {
    const newCard = await card.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});*/

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const cardData = await card.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!cardData) {
//       res.status(404).json({ message: 'No card found with this id!' });
//       return;
//     }

//     res.status(200).json(cardData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

