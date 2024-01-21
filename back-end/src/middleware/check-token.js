const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const checkTokenMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({'status':401});
  }

  jwt.verify(token, process.env.REFRESH_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized');
    }

    req.user = decoded;
    return next();
  });
};

module.exports = checkTokenMiddleware;
