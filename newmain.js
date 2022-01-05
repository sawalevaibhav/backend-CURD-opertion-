
const express = require("express")
const cors = require("cors")
const app = express()

app.use(express())
app.use(express.json())
app.use(cors())



// connect to data

const db =require('./app2/model')

db.mongoose.connect(db.url)
            .then(()=>{
                console.log('Connected to Database!!!');
            })


require('./app2/Route/user.route')(app)






const port = 5000

app.listen(port,()=>{
    console.log(`new server started on ${port}`)
})