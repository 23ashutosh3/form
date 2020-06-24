const express = require("express");

const router = express.Router();
const OptionController = require("../../../controllers/api/v1/form");

router.post("/create-form", OptionController.form);

module.exports = router;
