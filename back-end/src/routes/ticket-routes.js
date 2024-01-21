const express = require('express');
const router = express.Router();
const {submitTicket, getUserTicket} = require('../controllers/Ticket');

router.get('/get-user-ticket', getUserTicket)
router.post('/submit-ticket', submitTicket)

module.exports = router;