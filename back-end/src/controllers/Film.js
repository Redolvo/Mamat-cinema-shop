const Film = require("../models/film");
const Mall = require("../models/mall");
const Schedule = require("../models/schedule");
const ticket_transaction = require("../models/ticket_transaction");
const { all } = require("../routes/users-routes");
const { Op, literal } = require("sequelize");
const moment = require("moment");
const currentDate = moment();

const getFilms = async (req, res) => {
    try {
        const films = await Film.findAll();
        res.json(films);
    } catch (err) {
        console.error(err);
    }
};

const getFilmsId = async (req, res) => {
    try {
        const idFilm = req.params.id;
        const films = await Film.findOne({
            where: {
                id: idFilm,
            },
        });
        res.json(films);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const getFilmFilterBioskop = async (req, res) => {
    try {
        // CONTOH CGV
        const bioskop = req.body.bioskop;
        console.log("nama bioskop :", bioskop);
        let films = "";
        if (bioskop === "all") {
            films = await Film.findAll();
        } else {
            const malls = await Mall.findAll({
                where: {
                    bioskop,
                },
            });

            const mallIds = malls.map((mall) => mall.id);

            const schedules = await Schedule.findAll({
                where: {
                    mall_id: {
                        [Op.in]: mallIds,
                    },
                },
            });

            const filmIds = schedules.map((schedule) => schedule.film_id);
            films = await Film.findAll({
                where: {
                    id: {
                        [Op.in]: filmIds,
                    },
                },
            });
        }
        res.json(films);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const getFilmsBySchedule = async (req, res) => {
    try {
        const { film_id, date, time_id } = req.body;
        const schedule = await Schedule.findOne({
            where: {
                film_id,
                [Op.and]: [
                    literal(`DAY(date) = ${date}`),
                    literal(`MONTH(date) = ${currentDate.month() + 1}`),
                    literal(`YEAR(date) = ${currentDate.year()}`),
                ],
                time_id,
            },
        });

        if (!schedule) {
            return res.status(404).json({ error: "Schedule not found" });
        }

        const scheduleId = schedule.id;

        const ticketTransactions = await ticket_transaction.findAll({
            where: {
                schedule_id: scheduleId,
            },
        });

        const reserveSeatArray = ticketTransactions.map((transaction) =>
            transaction.seat_number.split(",")
        );
        const flattenedReserveSeatArray = reserveSeatArray.flat();

        const scheduleWithTickets = {
            ...schedule.toJSON(),
            reserve_seat: flattenedReserveSeatArray,
        };

        res.json(scheduleWithTickets);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getFilms,
    getFilmsId,
    getFilmFilterBioskop,
    getFilmsBySchedule,
};
