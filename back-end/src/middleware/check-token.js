const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const checkTokenMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).redirect('/login-page');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized');
    }

    req.user = decoded;
    next();
  });
};

module.exports = checkTokenMiddleware;
