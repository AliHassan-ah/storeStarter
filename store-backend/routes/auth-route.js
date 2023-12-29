var express = require("express");
var router = express.Router();
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/auth-middleware");
const authControllers = require("../controllers/auth-controllers");
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;
