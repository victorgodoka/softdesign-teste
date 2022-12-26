const express = require("express");
const {
  _create,
  _update,
  _delete,
} = require("../controllers");
const UserModel = require("../models/user")

const router = express.Router();

router.route("/")
  .post((req, res) => _create(req, res, UserModel))
  .update((req, res) => _update(req, res, UserModel))
  .delete((req, res) => _delete(req, res, UserModel))


module.exports = router;
