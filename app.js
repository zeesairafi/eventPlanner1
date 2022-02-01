const express = require("express")
const { connect } = require("mongoose")
const app = express()
const connectDB = require("./db/database")
app.use(express.json())
connectDB();
app.listen(8080, () => console.log("this app is running"))