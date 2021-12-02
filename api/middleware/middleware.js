// ===== IMPORTS =====

function validateRegister(req, res, next) {
  const { username, password } = req.body
  if (username && password) {
    next()
  } else {
    next({ status: 400, message: "Please provide a username and password to register" })
  }
}

function handleError(err, req, res, next) {
  res.status(err.status || 500).json({
    message: `This is troubling... ${err.message}`
  })
}

module.exports = {
  validateRegister,
  handleError,
}
