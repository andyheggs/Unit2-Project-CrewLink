// Import Agency model 
const Agency = require('../models/agency'); 

/**
 * Middleware to check if the user is the owner of the agency
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const isAgencyOwner = async (req, res, next) => {
  try {
    // Find agency by ID from request parameters
    const agency = await Agency.findById(req.params.agencyId);
    
    // If agency is not found, respond with 404 status and render the 404 page
    if (!agency) {
      return res.status(404).render('404.ejs');
    }

    // Check user in  session is owner agency
    if (agency.user.toString() !== req.session.user._id) {
      // If not, respond with 403 status and 'Access denied' message
      return res.status(403).send('Access denied');
    }

    // If the user is owner, proceed to next middleware
    next();
  } catch (error) {
    // Log any unexpected errors to the console
    console.error(error);
    
    // Respond with 500 status and send 'Internal Server Error' message for any caught errors
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = isAgencyOwner;
