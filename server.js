const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

//Session Management:
const session = require("express-session");

// Session saving functionality:
const MongoStore = require("connect-mongo");

//Import Middleware Route Protection:
const isSignedIn = require("./middleware/is-signed-in.js");

//Import middleware for blanket user session info on all views
const passUserToView = require("./middleware/pass-user-to-view.js");

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

//import authController router object:
const authController = require("./controllers/auth.js");

//Import Controller router objects agency/platform/job: 
const agencyController = require('./controllers/agency');

const platformController = require('./controllers/platform');

const jobController = require('./controllers/job');


//database connection   
mongoose.connect(process.env.MONGODB_URI);
    
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//-------------------------------------------------------MIDDLEWARE-------------------------------------------------------

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));

// Morgan for logging HTTP requests
app.use(morgan('dev'));

//Middleware for Session Management:
app.use
  (session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,

    //Session saving via MongoDB
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }), 
  })
);

// Custom Middleware for blanket user session info on all page views
app.use(passUserToView);

//-------------------------------------------------------ROUTES-------------------------------------------------------

//Home Page Route

//update landing page to recognise users session (user:req.session.user, });  });) removed - and upgraded with res.locals blanket session middleware
app.get("/", (req, res) => {

  res.render("index.ejs");

});

//Mount controllers Auth Route:
app.use("/auth", authController);

//Mount controllers agency/platform/job Route:
app.use('/agency', isSignedIn, agencyController);

app.use('/platform', isSignedIn, platformController);

app.use('/job', isSignedIn, jobController);



//-------------------------------------------------------START THE SERVER-------------------------------------------------------

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
