const express = require("express");
const router = express.Router();
const authAllRoutes = require("../controllers/auth.controllers"); //this is the all route variable
const signUpSchema = require("../validators/auth.validator");
const validate = require("../middlewares/validate.middleware");

router.route("/").get(authAllRoutes.home); //this is the usecase

router
  .route("/register")
  .post(validate(signUpSchema), authAllRoutes.registration);

//validate(signUpSchema(email, password)),
router.route("/login").post(authAllRoutes.login);

module.exports = router;
