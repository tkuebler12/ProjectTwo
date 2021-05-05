

const router = require("express").Router();
const { Pokemon } = require("../../models");
const withAuth = require('../../utils/auth');
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


router.post('/', withAuth, async (req, res) => {
  try {
    const newCard = await card.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const cardData = await card.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!cardData) {
      res.status(404).json({ message: 'No card found with this id!' });
      return;
    }

    res.status(200).json(cardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

