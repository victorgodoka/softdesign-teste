const { authJwt } = require("../middlewares");
const controller = require("../controllers/user");
const express = require("express");
const router = express.Router();

const { _create, _update, _delete } = require("../controllers");
const UserModel = require("../models/user");

// router.route("/")
//   .post((req, res) => _create(req, res, UserModel))
//   .update((req, res) => _update(req, res, UserModel))
//   .delete((req, res) => _delete(req, res, UserModel))

router.route("/test/all").get(controller.allAccess);
router.route("/test/user").get([authJwt.verifyToken], controller.userBoard);
router
  .route("/test/admin")
  .get([authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

module.exports = router;
