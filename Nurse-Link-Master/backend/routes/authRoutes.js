const express = require("express")
const { login, logout, register, ping } = require("../controllers/authController")
const { checkAuth } = require("../middlewears/checkAuth")

const authRouter = express.Router()

authRouter.get("/ping", ping) 

authRouter.post("/register", register)

authRouter.post("/login", login)

authRouter.post("/logout", logout)

module.exports = authRouter