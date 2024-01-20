const express = require("express");
const router = express.Router();
const {signUp, signIn, cekLogin, logout} = require('../controllers/Users');
const checkTokenMiddleware = require("../middleware/check-token");


router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/logout", logout);

router.get("/cek-login", checkTokenMiddleware, cekLogin);

module.exports = router;
