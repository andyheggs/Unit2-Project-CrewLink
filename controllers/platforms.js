
/*
const express = require('express');

const router = express.Router();

const Platform = require('../models/platform');

//------------------------------------------------Retrieve All platforms------------------------------------------------

router.get('/', async (req, res) => {

  try {

    const platforms = await Platform.find({});

    res.json(platforms);

  } catch (err) {

    res.status(500).send(err);

  }

});

//------------------------------------------------Retrieve A Single Platform------------------------------------------------

router.get('/:id', async (req, res) => {

  try {

    const platform = await Platform.findById(req.params.id);

    res.json(platform);

  } catch (err) {

    res.status(500).send(err);

  }

});

//------------------------------------------------CREATE Platform------------------------------------------------

router.post('/', async (req, res) => {

  try {

    const platform = new Platform(req.body);

    await platform.save();

    res.status(201).json(platform);

  } catch (err) {

    res.status(400).send(err);
  }

});

//------------------------------------------------UPDATE Platform------------------------------------------------

router.put('/:id', async (req, res) => {

  try {

    const platform = await Platform.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(platform);

  } catch (err) {

    res.status(400).send(err);

  }

});

//------------------------------------------------DELETE Platform------------------------------------------------

router.delete('/:id', async (req, res) => {

  try {

    await Platform.findByIdAndDelete(req.params.id);

    res.status(204).send();

  } catch (err) {

    res.status(500).send(err);

  }

});


module.exports = router;
*/