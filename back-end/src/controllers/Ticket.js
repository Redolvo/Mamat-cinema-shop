const ticket_transaction = require("../models/ticket_transaction");

const submitTicket = async (req, res) => {
    try {
        const user_id = req.userId;
        const { schedule_id, seat_number } = req.body;
        const ticket_transactions = await ticket_transaction.create({
            user_id,
            schedule_id,
            seat_number,
        });
        res.status(201).json({ message: "Booking success" });
    } catch (err) {
        console.error("Error creating ticket:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { submitTicket };
