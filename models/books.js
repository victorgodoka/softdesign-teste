const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const Books = model(
  "Books",
  new Schema({
    name: String,
    ogName: String,
    author: String,
    year: Number,
    categories: [String],
    rented: Boolean,
    rentDate: Date,
  })
);

module.exports = Books;
