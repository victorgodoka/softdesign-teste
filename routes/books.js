const express = require("express");
const {
  _create,
  _update,
  _delete,
  _getAll,
  _getById,
} = require("../controllers");
const UserModel = require("../models/books")

const router = express.Router();

router
  .route("/")
  .get((req, res) => _getAll(req, res, UserModel))
  .post((req, res) => _create(req, res, UserModel))
  .put((req, res) => _update(req, res, UserModel))
  .delete((req, res) => _delete(req, res, UserModel));

router.route("/:id").get((req, res) => _getById(req, res, UserModel));

module.exports = router;
