const express = require('express')
const app = express()
const port = 3015
const router= require('./config/routes')

app.use(express.json())


app.get('/', (req,res)=>{
    res.json({
        notice: "welcome to query builder"
    })
})

app.use('/' ,router)

app.listen(port, ()=>{
    console.log('Listening to port 3015')
})