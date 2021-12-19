
var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js");



router.post('/login', 
  
  (req, res, next) => {
    console.log("")
    console.log("*******************************************")
    console.log(">> DEBUG: req.body of /login router.post:" + JSON.stringify(req.body));


    /* finding a user in the database */

    User.findOne({username: req.body.username}, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.status(403).json({message: "Login failed"});
      } else {

        /* checking if the password of the login-form matches the database  */
        /* if the check is succesful, enabling jsonwebtoken for the session */

        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            const jwtPayload = {
              id: user._id,
              username: user.username
            }
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

            console.log("")
            console.log(`<< DEBUG: succesfully logged in as: '${req.body.username}' with password: '${req.body.password}'`)
            console.log("*******************************************")
            console.log("")
          }
        })
      }
    })
});


/* creating a new user into the database */

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


    /* checking if there exists a user with the username */

    User.findOne({username: req.body.username}, (err, user) => 
    {
      if(err) { console.log(err); throw err; };

      if(user) 
      {
        return res.status(403).json({username: "Username already in use"});
        
      } else 


      /* if the username is free, hashing the password and creating the user */

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


/* searching for any posts from the database */

router.get("/post", (req, res, next) => {
  Post.find({}, (err, posts) => 
  {
    if(err) return next(err);
    
    if(posts) 
    {
      return res.json(posts);
    } else 
    {
      return res.status(404).send("xx No posts found!");
    }
  })
})


/* creating a new post into the database */

router.post("/post", (req, res, next) => 
{
  
  Post.find({}, (err, posts) => 
  {
    if(err) return next(err);

    console.log("<< DBG: posts.length = " + posts.length)


    /* checking if any posts already exist */
    /* if there are no posts, the ID of the new one will be 1 */
    /* if there are posts, the ID is 1 bigger than the last post's ID in the database */

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


/* searching for any comments from the database */

router.get("/comment", (req, res, next) => {
  Comment.find({}, (err, comments) => 
  {
    if(err) return next(err);
    
    if(comments) 
    {
      return res.json(comments);
    } else 
    {
      return res.status(404).send("xx No comments found!");
    }
  })
})


/* creating a new comment into the database */

router.post("/comment/:id", (req, res, next) => 
{
  
  Comment.find({}, (err, comments) => 
  {
    if(err) return next(err);

    /*
    console.log("")
    console.log("<< DBG: comments.length = " + comments.length)
    console.log(">> req.params.id has value: " + req.params.id)
    console.log("<< req.body has value: " + JSON.stringify(req.body))
    console.log("<< req.body.OGpostID has value: " + JSON.stringify(req.body.OGpostID))
    console.log("<< req.body.commentbody has value: " + JSON.stringify(req.body.commentbody))
    console.log("")
    */


    /* assigning the comment the same ID that the post has */
    /* e.g.: if commenting under /post/2, the new comment's ID will be 2 */

    /* we can use this later to match all comments with the same ID as
     * the post to the same page */

    let id = req.params.id
    

    Comment.create(
      {
        OGpostID: id,
        commentbody: req.body.commentbody
      },

      (err, ok) => 
      {
        if(err) throw err;
        return res.redirect("/");
      }
    )
  })
})

module.exports = router;
