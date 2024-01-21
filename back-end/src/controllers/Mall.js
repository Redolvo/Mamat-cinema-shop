const Mall = require('../models/mall');

const getMalls = async(req, res) => {
    try {
        const malls = await Mall.findAll()
        res.json(malls)
    } catch (err) {
        console.error(err)
    }
}

module.exports = { getMalls };