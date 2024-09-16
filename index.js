const express = require('express');
const cors = require('cors');
require('dotenv/config')

const app = express();
app.use(express.json())
app.use(cors())

require('./database/mongoose')

const UserController = require('./api/users/controller/users.controller')
const AuthController = require('./api/auth/controller/auth.controller')
app.use([UserController, AuthController])

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})