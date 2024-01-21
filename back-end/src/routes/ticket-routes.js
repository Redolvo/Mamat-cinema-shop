const express = require("express");
const router = express.Router();
const { submitTicket } = require("../controllers/Ticket");
const { verifyToken } = require("../middleware/check-token");

router.post("/submit-ticket", verifyToken, submitTicket);

module.exports = router;
