const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token", token);
    if (token == null)
        return res.status(401).json({ status: 401, message: "Unauthorized" });

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) return res.status(402).send("Unauthorized");
        req.email = decoded.email;
        req.userId = decoded.userId;
        console.log(decoded);
        next();
    });
};

module.exports = { verifyToken };
