const express = require('express');
const path = require("path")
const productRouter = require('./routes/productRouter')
const viewRouter = require('./routes/viewRouter')
var cors = require('cors')

const app = express();

app.use(cors())

// pug use
app.set('view engine', "pug")
app.set('views', path.join(__dirname,'views'))

app.use('/', viewRouter)
app.use(express.static(__dirname + '/public'))


// api
app.use('/api/v1/product', productRouter);

module.exports = app;