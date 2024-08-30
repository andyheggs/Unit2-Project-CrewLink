/*const express = require('express');

const router = express.Router();

const Job = require('../models/job');

//------------------------------------------------Retrieve All Jobs------------------------------------------------

router.get('/', async (req, res) => {

  try {

    const jobs = await Job.find({});

    res.json(jobs);

  } catch (err) {

    res.status(500).send(err);

  }

});

//------------------------------------------------Retrieve A Single Job------------------------------------------------

router.get('/:id', async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    res.json(job);

  } catch (err) {

    res.status(500).send(err);

  }

});

//------------------------------------------------CREATE Job------------------------------------------------

router.post('/', async (req, res) => {

  try {

    const job = new Job(req.body);

    await job.save();

    res.status(201).json(job);

  } catch (err) {

    res.status(400).send(err);
  }

});

//------------------------------------------------UPDATE Job------------------------------------------------

router.put('/:id', async (req, res) => {

  try {

    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(job);

  } catch (err) {

    res.status(400).send(err);

  }

});

//------------------------------------------------DELETE Job------------------------------------------------

router.delete('/:id', async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.status(204).send();

  } catch (err) {

    res.status(500).send(err);

  }

});



module.exports = router;
*/