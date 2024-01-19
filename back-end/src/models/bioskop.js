const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const bioskop = sequelize.define('bioskop', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = bioskop;
