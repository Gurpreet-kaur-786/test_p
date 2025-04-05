import dotenv from 'dotenv'
dotenv.config()

import connectDb from './src/db/database.js'
import express from 'express'
import empRouter from './src/routes/emp.router.js'

const app = express()

/*app.get('/h',(req,res)=>{
    res.send('Hello')
})*/

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/uploads',express.static('uploads'))

app.use('/',empRouter)

connectDb()

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`SERVER RUN ON http://localhost:${port}`)
})