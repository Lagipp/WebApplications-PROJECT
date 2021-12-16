
var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js");



/* GET users listing. */
router.get('/listofusers', validateToken, (req, res, next) => {
  User.find({}, (err, users) => {
    if(err) return next(err);
    res.render("users", {users});
  })

});

router.get('/listx', (req, res) => {
  User.find({}, (err, users) => {
    console.log(users);
  });
  res.json({status: "ok"})
});



router.get('/login', (req, res, next) => {

});


router.post('/login', 
  body("username").trim().escape(),
  body("password").escape(),

  (req, res, next) => {
    console.log("req.body of /login router.post:" + req.body);

    User.findOne({username: req.body.username}, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.status(403).json({message: "Login failed"});
      } else {
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            const jwtPayload = {
              id: user._id,
              username: user.username
            }
            console.log("process.env.SECRET: " + process.env.SECRET)

            jwt.sign(
              jwtPayload,
              process.env.SECRET,
              {
                expiresIn: 120
              },
              (err, token) => {
                res.json({success: true, token});
              }
            );

            res.json({success: true});
          }
        })
      }
    })
});


router.get('/register', (req, res, next) => {
});


router.post('/register', 
  body("username").isLength({min: 3}).trim(),
  body("password").isLength({min: 3}),
  (req, res, next) => 
  {
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
    {
      return res.status(400).json({errors: errors.array()});
    }

    User.findOne({username: req.body.username}, (err, user) => 
    {
      if(err) { console.log(err); throw err; };

      if(user) 
      {
        return res.status(403).json({username: "Username already in use"});
        
      } else 
      {
        bcrypt.genSalt(10, (err, salt) => 
        {
          bcrypt.hash(req.body.password, salt, (err, hash) => 
          {
            if(err) throw err;

            User.create(
              {
                username: req.body.username,
                password: hash
              },

              (err, ok) => 
              {
                if(err) throw err;
                return res.redirect("users/login");
              }

            );
          });
        });
      };
    });
});


module.exports = router;
