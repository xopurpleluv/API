const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require("dotenv").config();

const API = express();

//Middlwwares
API.use(express.json())
API.use(express.urlencoded({extended: true}))
API.use(cors())
API.use(helmet())

//Routes
const LibraryRoot = require("./View/item.view")
API.use("/", LibraryRoot)

//DB Connection
require("../config/DB-Connection")

//Server
API.listen(process.env.PORT, () => {
    console.log(`API Listening on PORT ${process.env.PORT}`)
})