const express = require("express");
const router = express.Router();
const { signUp, signIn, cekLogin, logout } = require("../controllers/Users");
const { verifyToken } = require("../middleware/check-token");
const { refreshToken } = require("../controllers/RefreshToken");

router.post("/signup", signUp);

router.post("/signin", signIn);

router.delete("/logout", logout);

router.get("/cek-login", verifyToken, cekLogin);

router.get("/token", refreshToken);

module.exports = router;
