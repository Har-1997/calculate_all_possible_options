const express = require("express");
const { addCombination } = require("../controllers/combination");
const router = express.Router();

router.post('/generate', addCombination);

module.exports = router;