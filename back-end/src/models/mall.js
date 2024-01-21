    const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database');

    const Mall = sequelize.define('mall', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bioskop: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        ticket_price: {
            type: DataTypes.FLOAT, 
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
        },
        contact: {
            type: DataTypes.STRING,
        },
        mall_iframe_location: {
            type: DataTypes.STRING,
        },
    });


    module.exports = Mall;
