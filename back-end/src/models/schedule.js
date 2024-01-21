const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Film = require('./film');
const Mall = require('./mall');

const schedule = sequelize.define('schedules', {
    film_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mall_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time_id: {
        type: DataTypes.INTEGER, 
    },
    date: {
        type: DataTypes.DATE, 
    },
    seat_amount: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    }
}, {
    indexes: [
        {
            fields: ['film_id'],
        },
        {
            fields: ['mall_id'],
        },
    ],
});

Film.hasMany(schedule, { foreignKey: 'film_id' });
Mall.hasMany(schedule, { foreignKey: 'mall_id' });

module.exports = schedule;
