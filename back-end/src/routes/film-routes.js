const express = require('express');
const router = express.Router();
const getFilms = require('../controllers/Film');

router.get('/get-films', getFilms)

module.exports = router;