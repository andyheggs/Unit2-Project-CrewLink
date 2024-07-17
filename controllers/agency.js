const express = require('express');

const router = express.Router();

const Agency = require('../models/agency');


// Route to render form to add new agency
router.get('/new', (req, res) => {

  res.render('agency/new.ejs');
});

// Route to handle form submission for new agency

router.post('/', async (req, res) => {

  try {
    
    const agency = new Agency(req.body);

    await agency.save();

    res.redirect('/');

  } catch (err) {

    res.status(400).send(err);
  }
});

// Route to list all new agencies seed data:

router.get('/', async (req, res) => {

  try {

    const agencies = await Agency.find({});

    res.json(agencies);

  } catch (err) {
    
    res.status(500).send(err);
  }
});

module.exports = router;
