const { signupController } = require("../controllers/UserControllers");

const { Router } = require("express");

const router = Router()

const signupRouter = router.post("/", signupController)

module.exports = {
    signupRouter
}