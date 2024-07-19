// Import dotenv to handle environment variables
const dotenv = require('dotenv');
dotenv.config();

// Import the serverless-http package to handle serverless functions
const serverless = require('serverless-http');

// Import express
const express = require('express');
const app = express();

// Import mongoose for MongoDB interaction
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

// Session Management packages
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Middleware for route protection and user session info
const isSignedIn = require('../../middleware/is-signed-in');
const passUserToView = require('../../middleware/pass-user-to-view');

// Require path for static file serving (public folder)
const path = require('path');

// Import Controller router objects
// Update paths to reflect the new structure
const authController = require('../../controllers/auth.js');
const agencyController = require('../../controllers/agency.js');
const platformController = require('../../controllers/platform.js');
const jobController = require('../../controllers/job.js');
const userController = require('../../controllers/user.js');

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

// Middleware for serving static files from the "public" folder
// Updated to work with Netlify
app.use(express.static('public'));

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
app.use('/agencies', isSignedIn, agencyController);
app.use('/platforms', isSignedIn, platformController);
app.use('/jobs', isSignedIn, jobController);
app.use('/users', isSignedIn, userController);

// Dashboard route explicitly defined
app.get('/dashboard', isSignedIn, (req, res) => {
  const user = req.session.user; // Adjust this based on where user info is stored
  if (user) {
    res.render('dashboard/dashboard.ejs', { user });
  } else {
    res.redirect('/auth/sign-in'); 
  }
});

//-------------------------------------------------------SERVERLESS HANDLER-------------------------------------------------------

// Remove the code to set the PORT and the app.listen call
// Export the serverless handler instead
module.exports.handler = serverless(app);
