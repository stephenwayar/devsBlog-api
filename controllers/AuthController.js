const User = require('../models/User');
const bcrypt = require("bcryptjs");

//POST controllers

exports.post_login = async function(req, res, next){
  email = req.body.email.toLowerCase();
  password = req.body.password

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).json({ 
          message: "Password or email is incorrect",
          success: false
        });
      }else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            res.status(200).json({ 
              message: "Successfully logged in", 
              success: true
            });
          }else {
            console.log(err)
            res.status(404)
              .json({
                message: 'Password or email is incorrect',
              })
          }
        })
      }
    }).catch(() => {
      res.status(404).json({
        message: 'Error Invalid Credentials'
      })
    })
}

exports.post_register = async function(req, res, next){
  
}

exports.post_forgot_password = async function(req, res, next){
  
}

exports.post_reset_password = async function(req, res, next){
  
}

//GET controllers

exports.get_all_users = function(req, res, next){
  User.find({}).then(users => {
    res.status(200).json(users)
  })
}

exports.get_single_user = function(req, res, next){  
  User.findById(req.params.id).then(user => {
    if(user){
      res.status(200).json(user)
    }else{
      res.status(404).json({
        message: "User not found"
      })
    }
  })
}