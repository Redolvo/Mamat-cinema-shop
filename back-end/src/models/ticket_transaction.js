const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Schedule = require('./schedule');
const User = require('./users');

const ticket_transaction = sequelize.define('ticket_transactions', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seat_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [
        {
            fields: ['user_id', 'schedule_id']
        },
        {
            fields: ['seat_number']
        }
    ]
});


Schedule.hasMany(ticket_transaction, { foreignKey: 'schedule_id' });
User.hasMany(ticket_transaction, { foreignKey: 'user_id' });

module.exports = ticket_transaction;
