var express = require('express');
var router = express.Router();


const User = require('../models/userCollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/registration', function(req, res, next) {
  res.render('registration');
});

router.post('/registration', async function(req, res, next) {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmPassword;

    if(password === cpassword) {
      const user = new User({
        firstName: req.body.firstName,  
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        age: req.body.age,
        password: password,
        confirmPassword: cpassword
      })
      await user.save();
      res.redirect('login');
    }else{
      res.send('Passwords do not match');
      return;
    }

  } catch (error) {
    res.send(error);
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
