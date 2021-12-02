// ===== IMPORTS =====
const express = require("express")
const usersRouter = require("./users/usersRouter")
const path = require("path")

// ===== INSTANCE OF EXPRESS =====
const server = express()

// ===== GLOBAL MIDDLEWARE =====
server.use(express.json())

// ===== ROUTERS =====
server.use("/api/users", usersRouter)
server.use(express.static(path.join(__dirname, "../client/build")))

// ===== ENDPOINTS =====
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"))
})

// ===== EXPORT =====
module.exports = server
