const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const movieRoutes = require('./movieRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/movies', movieRoutes);
router.use('/users', userRoutes);

module.exports = router;