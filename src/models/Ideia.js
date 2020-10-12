const mongoose = require('mongoose')

const IdeiaSquema = new mongoose.Schema({
    publico: String,
    necessidade: String,
    nome: String,
    ideiasSemelhantes: String,
    diferencial: String
})