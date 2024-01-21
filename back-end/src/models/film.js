const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const film = sequelize.define('films', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT
  },
  img_cover: {
    type: DataTypes.STRING
  }
});

module.exports = film;