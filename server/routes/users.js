
var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js");




/* GET users listing. */
router.get('/listofusers', validateToken, (req, res, next) => {
  User.find({}, (err, users) => {
    if(err) return next(err);
    res.json(users);
  })

});

router.get('/listx', (req, res) => {
  User.find({}, (err, users) => {
    console.log(users);
  });
  res.json({status: "ok"})
});


/*
router.get('/login', (req, res, next) => {

});
*/
/*
  body("username").trim().escape(),
  body("password").escape(),
*/

router.post('/login', 
  
  (req, res, next) => {
    console.log("")
    console.log("*******************************************")
    console.log(">> DEBUG: req.body of /login router.post:" + JSON.stringify(req.body));

    User.findOne({username: req.body.username}, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.status(403).json({message: "Login failed"});
      } else {
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            //console.log(">> DEBUG: inside isMatch of 'users.js'")
            const jwtPayload = {
              id: user._id,
              username: user.username
            }
            //console.log(">> DEBUG: Process.env.secret: " + process.env.SECRET)
            jwt.sign(
              jwtPayload,
              process.env.SECRET,
              {
                expiresIn: 120
              },
              (err, token) => {
                //console.log(">> DEBUG: JWT.sign was succesfull!")
                //console.log("<< DEBUG: token has value: " + token)
                //console.log("")
                res.json({success: true, token});
              }
            );

              

            //res.json({success: true});    // TOMMI KUNNARI HELPED ME BY SAYING THIS LINE NEEDS TO BE REMOVED!!!!!!!!
            console.log("")
            console.log(`<< DEBUG: succesfully logged in as: '${req.body.username}' with password: '${req.body.password}'`)
            console.log("*******************************************")
            console.log("")
          }
        })
      }
    })
});

/*
router.get('/register', (req, res, next) => {
});
*/

router.post('/register', 
  body("username").isLength({min: 3}).trim().escape(),
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
                return res.redirect("/users/login");
              }

            );
          });
        });
      };
    });
});

// validateToken,

router.get("/post", (req, res, next) => {
  Post.find({}, (err, posts) => 
  {
    if(err) return next(err);
    
    if(posts) 
    {
      return res.json(posts);
    } else 
    {
      return res.status(404).send("No posts found!");
    }
  })
})


router.post("/post", (req, res, next) => 
{
  //console.log("user" + req.body.username + "is making a new post")
  //console.log(JSON.stringify(">> DBG: req.body inside users.js router.post('/post') is: " + JSON.stringify(req.body)))

  
  Post.find({}, (err, posts) => 
  {
    if(err) return next(err);

    console.log("<< DBG: posts.length = " + posts.length)

    let id = posts.length
    ? posts[posts.length - 1].postID + 1
    : 1;
    

    Post.create(
      {
        postID: id,
        postbody: req.body.postbody
      },

      (err, ok) => 
      {
        if(err) throw err;
        return res.redirect("/");
      }
    )
})
})

//const post = posts.find(post => (post.id).toString() === id);

router.get('/post/:id', function(req, res, next) {
  
  console.log("<< dbg: in router.get('/post/:id)")
  console.log("req.body = " + JSON.stringify(req.body))
  console.log(">> req.body.postbody = " + JSON.stringify(req.body.postbody))
  console.log(">> req.body.postID = " + JSON.stringify(req.body.postID))

  res.json(data.find(post => (post.postID).toString() === req.params.id));
});



module.exports = router;
