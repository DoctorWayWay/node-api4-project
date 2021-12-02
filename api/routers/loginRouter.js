// ===== IMPORTS =====
const express = require('express')
const userList = require("./users.json") // dummy data
const {
  validateLogin,
  handleError, } = require("../middleware/middleware")

// ===== INSTANCE OF EXPRESS =====
const router = express.Router()

// ===== ENDPOINTS =====
router.post("/", validateLogin, (req, res, next) => {
  try {
    const { username } = req.body
    res.status(201).json(`Welcome ${username}!`)
  } catch (error) {
    next(error)
  }
})

router.use(handleError) //  error handler middleware

// ===== EXPORT =====
module.exports = router;
