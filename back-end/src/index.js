const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const sequelize = require('./config/database');
const usersRoutes = require('./routes/users-routes');
// MODELS
const bioskop = require('./models/bioskop')
const mall = require('./models/mall')
// MODELS END
const checkTokenMiddleware = require('./middleware/check-token'); // Import middleware
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

// TEMP
app.use('/login-page', express.static('public/login.html'));
app.use('/signup-page', express.static('public/signup.html'));
app.use('/home-page', checkTokenMiddleware, express.static('public/home.html'));


// Routes
app.use('/api/users', usersRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error synchronizing database:', err));
