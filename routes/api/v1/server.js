const express = require("express");

const router = express.Router();
const apiController = require("../../../controllers/api/v1/form");

router.post("/", apiController.fillForm);

module.exports = router;
