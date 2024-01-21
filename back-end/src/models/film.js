const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const film = sequelize.define('films', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT
  },
  img_cover: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  },
  duration: {
    type: DataTypes.STRING
  },
  director: {
    type: DataTypes.STRING
  },
  trailer_url: {
    type: DataTypes.STRING
  },
  age_restriction: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER
  },
});

module.exports = film;