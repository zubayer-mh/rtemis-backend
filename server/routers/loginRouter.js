const { Router } = require("express")
const { loginController } = require("../controllers/UserControllers")

const router = Router()

// export const loginRouter = router.post("/login", loginController)


const loginRouter = router.post("/", loginController)

module.exports = {
    loginRouter
}