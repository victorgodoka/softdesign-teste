const express = require("express");
const router = express.Router();
const Services = require("../services");
const Books = require("../models/books");

router.route("/").get(async (req, res) => {
  const values = await Services.getAll(Books);
  res.render("index", { title: "Hey", books: values });
});

module.exports = router;