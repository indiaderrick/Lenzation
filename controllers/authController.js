const User = require('../models/user');

//REGISTER FORM:
function registerFormRoute(req, res){
  res.render('auth/register');
}

//REGISTER ROUTE:
function registerRoute(req, res) {
  User.create(req.body)
    .then(user => {
      console.log('Created a user', user);
      res.redirect('/login');
    });
}

//LOGIN FORM:
function loginFormRoute(req, res){
  res.render('auth/login');
}

//LOGIN ROUTE:
function loginRoute(req, res){
  User.findOne({email: req.body.email})
    .then(result => {
      if(!result) {
        res.redirect('/register');
      } else {
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
}

// LOGOUT:
function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
