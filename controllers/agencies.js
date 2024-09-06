const express = require('express');
const Agency = require('../models/agency');
const isSignedIn = require('../middleware/is-signed-in');
const isAgencyOwner = require('../middleware/agency-owner');

const router = express.Router();

// All routes protected by `isSignedIn`
router.use(isSignedIn);


//----------------------------------------------All Agency Listings----------------------------------------------// 

router.get('/', async (req, res) => {

  try {

    const agencies = await Agency.find({ user: req.session.user._id }); // Only fetch agencies owned by the signed-in user

    res.render('agencies/index.ejs', { agencies });

  } catch (error) {

    console.log(error);

    res.redirect('/');

  }

})

//----------------------------------------------New Agency----------------------------------------------// 

router.get('/new', (req, res) => {

  try {

    res.render('agencies/new.ejs');

  } catch (error) {

    console.log(error);

    res.redirect('/');

  }

})

//----------------------------------------------Create Agency----------------------------------------------// 

router.post('/', async (req, res) => {

  try {

    req.body.user = req.session.user._id;

    const createdAgency = await Agency.create(req.body);

    res.redirect('/agencies');

  } catch (error) {

    console.log(error);

    res.render('agencies/new.ejs', { errorMessage: error.message });

  }

})

//----------------------------------------------Show Agency----------------------------------------------// 

router.get('/:agencyId', async (req, res) => {
  
  try {

    const agencyId = req.params.agencyId;

    const agency = await Agency.findById(agencyId);


    if (!agency) {

      const error = new Error('Agency not found.');

      error.status = 404;

      throw error;
    }

    res.render('agencies/show.ejs', { agency });

  } catch (error) {

    console.log(error);

    if (error.status === 404) {

      return res.render('404.ejs');

    }

    res.redirect('/');

  }
  
});

//----------------------------------------------Delete Agency----------------------------------------------// 

router.delete('/:agencyId', async (req, res) => {

  try {

    const agency = await Agency.findById(req.params.agencyId);

    await agency.deleteOne();

    res.redirect('/agencies');

  } catch (error) {

    console.error(error);

    res.redirect('/');
  }

});      


//----------------------------------------------Edit Agency Details----------------------------------------------// 

router.get('/:agencyId/edit', async (req, res) => {

  try {

    const currentAgency = await Agency.findById(req.params.agencyId);
    
    res.render('agencies/edit.ejs', {

      agency: currentAgency,

    });
    
  } catch (error) {

    console.log(error);

    res.redirect('/agencies');
  }
})

//----------------------------------------------Update Agency----------------------------------------------// 
router.put('/:agencyId', async (req, res) => {

  try {

    const currentAgency = await Agency.findById(req.params.agencyId);

    await currentAgency.updateOne(req.body);

    res.redirect('/agencies');
    
  } catch (error) {
    console.log(error)
    res.redirect('/agencies')
  }
});


module.exports = router
