const express = require('express');
const router = express.Router();
const {getMalls} = require('../controllers/Mall');

router.get('/get-malls', getMalls)


module.exports = router;