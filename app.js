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

// route the pug
// app.get('/',(req,res) => {
//     res.status(200).render('product')
// })
app.use('/', viewRouter)
app.use(express.static(__dirname + '/public'))


// route
app.use('/api/v1/product', productRouter);

module.exports = app;