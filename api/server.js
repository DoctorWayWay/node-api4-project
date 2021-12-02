// ===== IMPORTS =====
const express = require("express")
const usersRouter = require("./routers/usersRouter")
const path = require("path")

// ===== INSTANCE OF EXPRESS =====
const server = express()

// ===== GLOBAL MIDDLEWARE =====
server.use(express.json())
server.use(express.static(path.join(__dirname, "../client/build")))

// ===== ROUTERS =====
server.use("/api/users", usersRouter)

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"))
})

// ===== EXPORT =====
module.exports = server
