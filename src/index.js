const { json } = require('express')
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.rmn5d.mongodb.net/tobedone?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json())

app.use('/', routes)
app.listen(8080, () => console.log('Servindo...'))