// controllers/job.js

const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Route to render form to add new job
router.get('/new', (req, res) => {

  res.render('job/new.ejs', { agencies: [], platforms: [] });

});

// Route to handle form submission for new job

router.post('/', async (req, res) => {

  try {

    const job = new Job(req.body);

    await job.save();

    res.redirect('/');

  } catch (err) {
    
    res.status(400).send(err);
  }
});

// Route to list all job seed data

router.get('/', async (req, res) => {

  try {

    const jobs = await Job.find({});

    res.json(jobs);

  } catch (err) {

    res.status(500).send(err);

  }
  
});

module.exports = router;
