const express= require('express');
const passport = require('passport')
const app = express();


app.get('/',(req,res)=> {
    res.send({hi:'there'})
})

// app.get("/signup",(req,res)=> {
//     res.send({hello:"World"})
// })

app.listen(5000)