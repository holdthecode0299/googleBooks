const axios = require("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req; 
      axios 
        .get ("https://www.googleapis.com/books/v1/volumes", {
          params
        })
        .then(results =>
          results.data.items.filter(
            result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink && 
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks && 
            result.volumeInfo.imageLinks.thumbnail
          )
          )
          .then(apiBooks => 
            db.Books.find().then (dbBooks =>
              apiBooks.filter(apiBooks =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBooks.id)
                )
                )
                )
              .then(books => res.json(books))
              .catch(err => res.status(422).json(err));

  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
              }
};