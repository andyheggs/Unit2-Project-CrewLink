// controllers/platform.js

const express = require('express');

const router = express.Router();

const Platform = require('../models/platform');

// Route to render form to add new platform
router.get('/new', (req, res) => {

  res.render('platform/new.ejs');

});

// Route to handle form submission for new platform
router.post('/', async (req, res) => {

  try {

    const platform = new Platform(req.body);

    await platform.save();

    res.redirect('/');

  } catch (err) {
    
    res.status(400).send(err);
  }
});

// Route to list all platform seed data

router.get('/', async (req, res) => {

  const platforms = await Platform.find({});

  res.json(platforms);

});


module.exports = router;