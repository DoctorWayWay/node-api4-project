// ===== IMPORTS =====
const express = require('express')

// ===== INSTANCE OF EXPRESS =====
const router = express.Router();

// ===== ENDPOINTS =====
router.get("/", (req, res) => {
  res.status(200).json([
    { id: 1, username: "Bill" },
    { id: 2, username: "Bob" },
    { id: 3, username: "Barney" },
  ])
})

// ===== EXPORT =====
module.exports = router;
