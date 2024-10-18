const express = require('express');
const router = express.Router();
const { User, Movie } = require('../models');
const auth = require('../middleware/auth');

router.get('/mylist', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: [{ model: Movie, as: 'myList' }]
    });
    res.json(user.myList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/mylist/:id', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    await user.addMyList(movie);
    const updatedList = await user.getMyList();
    res.json(updatedList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/mylist/:id', auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: 'Movie not found' });
    }
    await user.removeMyList(movie);
    const updatedList = await user.getMyList();
    res.json(updatedList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;