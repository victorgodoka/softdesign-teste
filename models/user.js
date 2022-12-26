const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const User = model(
  "User",
  new Schema({
    username: String,
    password: String,
    email: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
