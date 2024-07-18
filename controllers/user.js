const express = require('express');

const router = express.Router();

const User = require('../models/user');

//------------------------------------------------Retrieve User Dashboard------------------------------------------------

router.get('/dashboard', async (req, res) => {

  try {

    const user = await User.findById(req.session.user._id)

      .populate('agencies platforms')

      .populate({

        path: 'agencies',

        populate: {

          path: 'jobs'

        }

      })

      .populate({

        path: 'platforms',

        populate: {

          path: 'jobs'

        }
      });

    res.render('dashboard', { user });

  } catch (err) {

    res.status(500).send(err);

  }

});

module.exports = router;
