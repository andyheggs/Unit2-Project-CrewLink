const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to list all users seeded data
router.get('/', async (req, res) => {

  try {

    const users = await User.find({}).populate('agencies platforms');

    res.json(users);

  } catch (err) {

    res.status(500).send(err);

  }
  
});


module.exports = router;
