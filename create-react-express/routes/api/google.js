
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Book routes
router
.route("/")
.get(googleController.findAll);

module.exports = router;