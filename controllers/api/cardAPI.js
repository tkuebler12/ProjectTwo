// //using pokemon sdk
// const pokemon = require('pokemontcgsdk');

// pokemon.configure({apiKey: '12e417e968-a16c-4330-bba3-93de7507eeb1'});


const router = require('express').Router();
const { card } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newCard = await card.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCard);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
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

