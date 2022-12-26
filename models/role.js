const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const Role = model(
  "Role",
  new Schema({
    name: String,
  })
);

module.exports = Role;
