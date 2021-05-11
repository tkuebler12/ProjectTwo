const router = require('express').Router();
const { User, Pokemon } = require('../../models');

const withAuth = require('../../utils/auth');


//GET USER CARDS 
router.post('/', withAuth, async (req, res) => {
  try {
    // Get all pokecards and JOIN with user data
    const pokeData = await Pokemon.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'images'],
        },
      ],
    });

    // Serialize data so the template can read it
    const pokemon = Pokemon.map((pokemon) => pokemon.get({ plain: true }));

    //Pass serialized data and session flag into template
    res.render('homepage', {
      pokemon,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const pokeData = await Pokemon.findOne(req.params.name, {
      include: [
        {
          model: User,
          attributes: ['name', 'images'],
        },
      ],
    });

    const pokemon = pokeData.get({ plain: true });

    res.render('pokemon', {
      ...pokemon,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pokemon }],
    });

    const user = userData.get({ plain: true });

    res.render('pokemon', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
