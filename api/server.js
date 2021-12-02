// ===== IMPORTS =====
const express = require("express")
const usersRouter = require("./users/usersRouter")

// ===== INSTANCE OF EXPRESS =====
const server = express()

// ===== GLOBAL MIDDLEWARE =====
server.use(express.json())

// ===== ROUTERS =====
server.use("/api/users", usersRouter)

// ===== EXPORT =====
module.exports = server
