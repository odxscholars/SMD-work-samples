const express = require("express")
const { checkAuth } = require("../middlewears/checkAuth")
const { getInstitutes, getInstitute, editInstitute, deleteInstitute } = require("../controllers/instituteController")

const instituteRouter = express.Router()

instituteRouter.get("/", checkAuth, getInstitutes)

instituteRouter.get("/:userId", checkAuth, getInstitute)

instituteRouter.post("/:userId", checkAuth, editInstitute)

instituteRouter.delete("/:userId", checkAuth, deleteInstitute)

module.exports = instituteRouter
