const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcrypt");

const users = sequelize.define("users", {
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        indexes: [
            {
                unique: true,
                fields: ["email"],
            },
        ],
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token: {
        type: DataTypes.TEXT,
    },
});

users.beforeCreate(async (user) => {
    const saltRounds = 15;
    user.password = await bcrypt.hash(user.password, saltRounds);
});

module.exports = users;
