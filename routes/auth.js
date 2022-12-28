const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth");
const express = require("express");
const router = express.Router();

router
  .route("/signup")
  .post(
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

router.route("/signin").post(controller.signin);

module.exports = router;
