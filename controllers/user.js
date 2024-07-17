const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to list all users seeded data
router.get('/', async (req, res) => {

  const users = await User.find({}).populate('agencies platforms');

  res.json(users);
});


module.exports = router;
