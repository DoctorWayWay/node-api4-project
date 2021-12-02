// ===== IMPORTS =====
const express = require('express')
const userList = require("./users.json") // dummy data
const {
  validateRegister,
  handleError, } = require("../middleware/middleware")

// ===== INSTANCE OF EXPRESS =====
const router = express.Router()

// ===== ENDPOINTS =====
router.post("/", validateRegister, (req, res, next) => {
  try {
    const { username } = req.body
    const id = userList.length + 1
    userList.push({ id, username })
    res.status(201).json({ id, username })
  } catch (error) {
    next(error)
  }
})

router.use(handleError) //  error handler middleware

// ===== EXPORT =====
module.exports = router;
