const express = require("express");
const {
  _create,
  _update,
  _delete,
  _getAll,
  _getByName,
  _getById,
} = require("../controllers/crud");
const BooksModel = require("../models/books")
const { authJwt } = require("../middlewares");
const router = express.Router();

function verifyContent (req, res, next) {
  const { name, author, year } = req.body;
  if (!name || !author || !year) return res.status(401).send({ message: "Unauthorized! Missing Data" });
  next();
}

router
  .route("/")
  .get([authJwt.verifyToken], (req, res) =>
    _getAll(req, res, BooksModel)
  )
  .post([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _create(req, res, BooksModel)
  )
  .put([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _update(req, res, BooksModel)
  )
  .delete([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _delete(req, res, BooksModel)
  );

router.route("/search/:name").get([authJwt.verifyToken], (req, res) => _getByName(req, res, BooksModel));

router.route("/search/:id").get([authJwt.verifyToken], (req, res) => _getById(req, res, BooksModel));

module.exports = router;
