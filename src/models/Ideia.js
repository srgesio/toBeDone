const mongoose = require('mongoose')

const IdeiaSquema = new mongoose.Schema({
    publico: String,
    necessidade: String,
    nome: String,
    oquee: String,
    ideiasSemelhantes: String,
    diferencial: String
})

module.exports = mongoose.model("Ideia", IdeiaSquema);