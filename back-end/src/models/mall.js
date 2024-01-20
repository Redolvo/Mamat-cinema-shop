    const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database');
    const Bioskop = require('./bioskop');

    const Mall = sequelize.define('mall', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bioskop_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    });

    Bioskop.hasMany(Mall, { foreignKey: 'bioskop_id' });

    module.exports = Mall;
