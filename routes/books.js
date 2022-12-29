const express = require("express");
const {
  _create,
  _update,
  _delete,
  _getAll,
  _getByName,
  _getById,
} = require("../controllers/crud");
const BooksModel = require("../models/books");
const { authJwt } = require("../middlewares");
const router = express.Router();
const Services = require("../services");

function verifyContent(req, res, next) {
  const { name, author, year } = req.body;
  if (!name || !author || !year)
    return res.status(401).send({ message: "Unauthorized! Missing Data" });
  next();
}

async function verifyRent(req, res, next) {
  const { rented } = await Services.getById(BooksModel, req.params.id);

  if (!req.body || !req.body.rented || !req.body.rentDate) {
    return res.status(401).send({ message: "Unauthorized! Missing Data" });
  }

  if (rented) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Book already rent." });
  }
  next();
}

router
  .route("/")
  .get([authJwt.verifyToken], (req, res) => _getAll(req, res, BooksModel))
  .post([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _create(req, res, BooksModel)
  );
router
  .route("/:id")
  .put([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _update(req, res, BooksModel)
  )
  .delete([authJwt.verifyToken, authJwt.isAdmin, verifyContent], (req, res) =>
    _delete(req, res, BooksModel)
  );

router
  .route("/name/:name")
  .get([authJwt.verifyToken], (req, res) => _getByName(req, res, BooksModel));

router
  .route("/id/:id")
  .get([authJwt.verifyToken], (req, res) => _getById(req, res, BooksModel));
router
  .route("/rent/:id")
  .put([authJwt.verifyToken, verifyRent], (req, res) =>
    _update(req, res, BooksModel)
  );

module.exports = router;
