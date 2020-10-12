const express = require('express')
const routes = express.Router()
const IdeiaController = require('./controllers/IdeiaController')

routes.get('/', (req, res) => res.json("{'index':'hello world!'}"))
routes.get('/ideias', IdeiaController.index)
routes.post('/ideia', IdeiaController.store)
routes.delete('/ideia', IdeiaController.destroy)
routes.put('/ideia/:id', IdeiaController.update)

module.exports = routes