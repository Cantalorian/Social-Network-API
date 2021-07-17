const { Router } = require('express');
const { User } = require('../models');

const userController = {
  // get all users
  findAllUsers(req,res) {
    User.find({})
      .populate({
        path: '',
        select: '-__v'
      })
      .select('-__v')
      .sort({ id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err)
      });
  }
};


module.exports = userController;