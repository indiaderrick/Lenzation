function secureRoute(req, res, next) {
  if(req.session.userId) {
    next();
  } else {
    res.redirect('/login');
    console.log('User was unauthorised');
  }
}
module.exports = secureRoute;
