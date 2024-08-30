const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

// Session Management
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Import middleware for blanket user session info on all views
const passUserToView = require('./middleware/pass-user-to-view.js');

// Import Middleware Route Protection
const isSignedIn = require('./middleware/is-signed-in.js');

// Import Controller router objects:
const authController = require('./controllers/auth.js');
const agenciesController = require('./controllers/agencies.js');

//stretch deployment:
//const platformController = require('./controllers/platform.js');
//const jobController = require('./controllers/job.js');
//const userController = require('./controllers/user.js');

// Set the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

//require path to enable express static css styling:
const path = require('path');

// Database connection   
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {

  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);

});

//-------------------------------------------------------MIDDLEWARE-------------------------------------------------------

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'));

// Morgan for logging HTTP requests
app.use(morgan('dev'));

//Middleware for CSS Styling:
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for Session Management
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
  }),
}));

// Custom Middleware for blanket user session info on all page views
app.use(passUserToView);

//-------------------------------------------------------ROUTES-------------------------------------------------------

// Home Page Route
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Mount controllers
app.use('/auth', authController);
app.use('/agencies', isSignedIn, agenciesController);

//app.use('/platform', isSignedIn, platformController);
//app.use('/job', isSignedIn, jobController);
//app.get('/dashboard', isSignedIn);
//app.use('/users', isSignedIn, userController);


// Page Error (404)
app.get('*', (req, res) => {
  res.render('404.ejs')
})  

//-------------------------------------------------------START THE SERVER-------------------------------------------------------

app.listen(port, () => {

  console.log(`The express app is ready on port ${port}!`);
  
});
