const ticket_transaction = require("../models/ticket_transaction");
const film = require("../models/film");
const schedule = require("../models/schedule");

const getUserTicket = async (req, res) => {
    try {
        const user_id = req.userId;

        // Fetch ticket transactions for the user
        const ticket_transactions = await ticket_transaction.findAll({
            where: {
                user_id,
            },
        });

        // Extract schedule ids from ticket transactions
        const scheduleIds = ticket_transactions.map(
            (transaction) => transaction.schedule_id
        );

        // Fetch schedules based on schedule ids
        const schedules = await schedule.findAll({
            where: {
                id: scheduleIds,
            },
        });

        // Fetch film data for each schedule
        const filmIds = schedules.map((s) => s.film_id);
        const films = await film.findAll({
            where: {
                id: filmIds,
            },
        });

        // Combine the data
        const result = ticket_transactions.map((transaction) => {
            const matchingSchedule = schedules.find(
                (schedule) => schedule.id === transaction.schedule_id
            );
            const matchingFilm = films.find(
                (film) => film.id === matchingSchedule.film_id
            );

            return {
                ...transaction.toJSON(),
                schedule: matchingSchedule ? matchingSchedule.toJSON() : null,
                film: matchingFilm ? matchingFilm.toJSON() : null,
            };
        });

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

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

module.exports = { getUserTicket, submitTicket };
