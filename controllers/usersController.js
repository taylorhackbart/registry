const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.User
        .find(req.query)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.User
      // This finds the User by ID, and is called when clicking a name from the 'showall' page
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.User 
      // This creates a new User in the database with the data from the create form
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.User
      // This finds the User in the database depending on what parameters are available, then updates their giftList, allowing one update route for two params
        .findOneAndUpdate({ _id: req.params.id} || {name: req.params.name}, {$set: {giftList: req.body.giftList}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.User
      // This finds the User by id and removes them from the database, this isn't being called anywhere currently
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findAllByName: function(req, res){
      db.User 
      // This finds the User by name, and is called from the search function in the nav bar
        .find({name: req.params.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };