const express = require("express");
const router = express.Router();
const { submitTicket, getUserTicket } = require("../controllers/Ticket");
const { verifyToken } = require("../middleware/check-token");

router.get("/get-user-ticket", verifyToken, getUserTicket);
router.post("/submit-ticket", verifyToken, submitTicket);

module.exports = router;
