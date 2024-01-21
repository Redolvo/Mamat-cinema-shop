const express = require('express');
const router = express.Router();
const {submitTicket} = require('../controllers/Ticket');

router.post('/submit-ticket', submitTicket)

module.exports = router;