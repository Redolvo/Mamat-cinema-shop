const express = require('express');
const router = express.Router();
const {getFilms, getFilmsId, getFilmFilterBioskop, getFilmsBySchedule} = require('../controllers/Film');

router.get('/get-films', getFilms)
router.get('/get-films/:id', getFilmsId)

// API FILTER FILM NOW PLAYING DARI BIOSKOP
router.get('/get-films-filter-bioskop', getFilmFilterBioskop)

router.get('/get-films-by-schedule', getFilmsBySchedule)

module.exports = router;