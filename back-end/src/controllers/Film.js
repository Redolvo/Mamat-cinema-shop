const film = require('../models/film');

const getFilms = async(req, res) => {
    try {
        const films = await film.findAll()
        res.json(films)
    } catch (err) {
        console.error(err)
    }
}

module.exports = getFilms