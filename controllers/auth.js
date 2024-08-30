
const express = require('express');
const router = express.Router();

//Import password hashing software:
const bcrypt = require ('bcrypt');

//Import new user model file:
const User = require('../models/user.js');

//Define the auth router object route to render sign-up:
router.get('/sign-up', (req, res) => {
    res.render('auth/sign-up.ejs');
});

// Define the auth router object route to render sign-in:
router.get('/sign-in', (req, res) => {
    res.render('auth/sign-in.ejs');
  });

//-------------------------------------------------------SIGN-OUT ROUTE-------------------------------------------------------
// Define the auth router object route to render sign-out:  

router.get('/sign-out', (req, res) => {

    //mitigate race condition with async call back for saving sessions:
    req.session.destroy(() => {
        res.redirect('/');
    });
});  

//-------------------------------------------------------SIGN-UP ROUTE-------------------------------------------------------

//Define auth route for a new user account:
router.post('/sign-up', async (req, res) => {

    try {

        //1. Verify new user a/c req. does not alread exist in DB
        const userInDatabase = await User.findOne({ username: req.body.username});
        if (userInDatabase) {
            return res.send('This username is already registered.');
        }

        //2. Verify correct password entry
        if (req.body.password !== req.body.confirmPassword) {
            return res.send('Passwords dont match');
        }

        //3. Enable password encryption (auto-gen a salt and hash - see Bcyrpt docs):
        const hashedPassword = bcrypt.hashSync(req.body.password, 12); 
        req.body.password = hashedPassword;

        //create the user in the database upon validation:
        await User.create(req.body);
        
        //send new user straight to session area on sign up, without the need to login again:
        res.redirect('/auth/sign-in');
        } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//-------------------------------------------------------SIGN-IN ROUTE-------------------------------------------------------

//Define auth route for user sign-in account:  
router.post('/sign-in', async (req, res) => {
    try {

    // 1. Check if user a/c exists in DB
        const userInDatabase = await User.findOne({ username: req.body.username});
        if (!userInDatabase) {
            return res.send('Login failed. Please try again');
        };

        // 2. now verify registered users password matches password entered at log-in:
        const validPassword = bcrypt.compareSync(
            req.body.password,
            userInDatabase.password
        );
        if (!validPassword) {
            return res.send('Login failed. Please try again.');
        };

        // 3. (1.) and (2.) are satifsfied, enable session:
        req.session.user = {            
            username: userInDatabase.username,
            _id: userInDatabase._id
        };
        //mitigate race condition with async call back for saving sessions
        req.session.save(() => {
            res.redirect('/');  
        });

    } catch (error) {
        console.log(error);
        res.redirect('/');
      }

});
    
module.exports = router;
