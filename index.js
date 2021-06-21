const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./routes/user')


require('dotenv').config()



const db = process.env.DB_HOST


mongoose
  .connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))




app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api',user)




const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))