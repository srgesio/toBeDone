const mongoose = require('mongoose')
const { find, update } = require('../models/Ideia')
const Ideia = require('../models/Ideia')

module.exports = {
    async index(req, res) {
        const ideias = await Ideia.find()
        return res.json(ideias)
    },
    async store(req, res) {
        const { publico, necessidade, nome, ideiasSemelhantes, diferencial } = req.body

        let ideia = await Ideia.findOne({ nome })
        if (!ideia) {
            ideia = await Ideia.create({
                publico,
                necessidade,
                nome,
                ideiasSemelhantes,
                diferencial
            })
        }


        return res.json(ideia);
    },
    async update(req, res) {
        const { publico, necessidade, nome, ideiasSemelhantes, diferencial } = req.body
        let ideia = await Ideia.findOne({ _id: req.params.id })
        if (!ideia) {
            return res.json("{'erro':'Não achou nenhuma ideia com esse nome'}")
        } else {
            await ideia.updateOne(req.body)
            let ideiaAtualizada = ideia
            return res.json(ideiaAtualizada)
        }
    },
    async destroy(req, res) {
        const { nome } = req.query

        let ideia = await Ideia.findOne({ nome })
        if (ideia) {
            ideia.deleteOne({ nome })
            return res.json("{}");
        } else {
            return res.json("{'erro':'Não achou nenhuma ideia com esse nome'}");
        }

    }
}