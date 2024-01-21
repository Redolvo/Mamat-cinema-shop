const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const sequelize = require("./config/database");
const usersRoutes = require("./routes/users-routes");
const filmRoutes = require("./routes/film-routes");
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

// Cors

// MODELS
const bioskop = require("./models/bioskop");
const mall = require("./models/mall");
const film = require("./models/film");
// MODELS END

const checkTokenMiddleware = require("./middleware/check-token"); // Import middleware
const PORT = 3000;

// Routes
app.use("/api", usersRoutes);
app.use("/api", filmRoutes);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Database synchronized");
        app.listen(PORT, () => {
            console.log(`App listening at http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error("Error synchronizing database:", err));
