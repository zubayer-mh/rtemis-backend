const express = require("express")
const app = express()
const port = 5000

// json parser
var bodyParser = require('body-parser')

// for getting value from env file
const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")


const { loginRouter } = require('./server/routers/loginRouter')
const { signupRouter } = require('./server/routers/signupRouter')
const { connectDB } = require("./server/database/dbConnectionSingleTone")
const verifyToken = require("./utilities/verifyToken")

app.get('/', verifyToken, async (req, res) => {
  res.send('Hello World!')
})

// connect the database
connectDB()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/login", loginRouter)
app.use("/signup", signupRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})