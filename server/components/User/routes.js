const express = require("express");
const router = express.Router();

const userController = require("./controller");

// /user
router.get("/", userController.getUser)

// /user/login
router.get("/login", userController.loginForm);

//login form submit
router.post("/login", userController.login);

// /user/register
router.get("/register", userController.registerForm);

//register form submit
router.post("/register", userController.register);

// /user/logout
router.get("/logout", userController.logout)

// Add this near the bottom of the file
router.get("/profile", (req, res) => {
    if (req.session.loggedIn) {
      res.json({ username: req.session.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  });

module.exports = router;