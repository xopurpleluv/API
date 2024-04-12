const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_Connection, {
    useNewUrlParser: true
})

const DB = mongoose.connection;

DB.on("error", () => {
    console.log("MongoDB connection error :(")
})

DB.once("open", () => {
    console.log("Successfully Connected")
})