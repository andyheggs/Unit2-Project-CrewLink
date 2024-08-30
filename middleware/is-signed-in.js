//middleware route protection

const isSignedIn = (req, res, next) => {

  if (req.session.user)return next(); 
  
  res.redirect('/agencies/index');
};

module.exports = isSignedIn;