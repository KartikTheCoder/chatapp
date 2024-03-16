const express = require("express");
const { getMsg, delMsg } = require("./message");
const router = express.Router();
router.get("/:id", getMsg);
router.delete("/:id", delMsg);

module.exports = router;
