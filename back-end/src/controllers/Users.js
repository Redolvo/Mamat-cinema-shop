const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config(); //ENV

const signUp = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        const user = await User.create({ full_name, email, password });

        res.status(201).json({ message: "Sign up success" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const accessToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.ACCESS_TOKEN,
            { expiresIn: "20s" }
        );
        const refreshToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.REFRESH_TOKEN,
            { expiresIn: "1d" }
        );

        await User.update(
            { refresh_token: refreshToken },
            {
                where: {
                    id: user.id,
                },
            }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Internal Server Error");
    }
};

const logout = async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.sendStatus(204);
    const user = await User.findAll({
        where: {
            refresh_token: token,
        },
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update(
        { refresh_token: null },
        {
            where: {
                id: userId,
            },
        }
    );
    res.clearCookie("refreshToken");
    return res.sendStatus(200);
};

const cekLogin = (req, res) => {
    res.status(201).json({ message: "Sign In Success" });
};

module.exports = { signUp, signIn, logout, cekLogin };
