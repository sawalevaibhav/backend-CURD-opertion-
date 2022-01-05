
const dbConfig = require("../dbConfig/db.config")
const mongoose = require("mongoose")


const db ={}
db.mongoose=mongoose
db.url = dbConfig.url
db.users = require("./user.mode")(mongoose)

module.exports=db