// ===== IMPORTS =====
const express = require('express')
const userList = require("./users.json") // dummy data

// ===== INSTANCE OF EXPRESS =====
const router = express.Router()

// ===== ENDPOINTS =====
router.get("/", (req, res) => {
  res.status(200).json(userList)
})

// ===== EXPORT =====
module.exports = router;
