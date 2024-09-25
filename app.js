const bodyParser = require('body-parser')
const routes = require('./routes/router')
const express = require('express')
const app = express()



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)



app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})