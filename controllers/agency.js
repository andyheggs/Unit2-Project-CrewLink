
const express = require('express');

const router = express.Router();

const Agency = require('../models/agency');

//------------------------------------------------Retrieve All Agencies------------------------------------------------

router.get('/', async (req, res) => {

  try {

    const agencies = await Agency.find({});

    //retrieve seeed data frm MngDB
    res.json(agencies);

    // test the server
  } catch (err) {

    res.status(500).send(err);
  }
});

//------------------------------------------------Retrieve A Single Agency------------------------------------------------

router.get('/:id', async (req, res) => {

  try {

    const agency = await Agency.findById(req.params.id);

    //retrieve seeed data frm MngDB
    res.json(agency);

    // test the server
  } catch (err) {

    res.status(500).send(err);
  }
});

//------------------------------------------------CREATE New Agency------------------------------------------------

router.post('/', async (req, res) => {

  try {

    const agency = new Agency(req.body);

    await agency.save();

    //retrieve seeed data frm MngDB
    res.status(201).json(agency);

  } catch (err) {

    res.status(400).send(err);
  }

});

//------------------------------------------------UPDATE Agency------------------------------------------------

// Update agency

router.put('/:id', async (req, res) => {

  try {

    const agency = await Agency.findByIdAndUpdate(req.params.id, req.body, { new: true });

    //retrieve seeed data frm MngDB
    res.json(agency);

  } catch (err) {

    res.status(400).send(err);
  }

});

//------------------------------------------------DELETE Agency------------------------------------------------

// Delete agency

router.delete('/:id', async (req, res) => {

  try {

    await Agency.findByIdAndDelete(req.params.id);

    res.status(204).send();

  } catch (err) {

    res.status(500).send(err);

  }
});


module.exports = router;
