const mongoose = require('mongoose')
const AutoresSchema = mongoose.Schema({
    name: {
        type: String
    }
    
}, { timestamps: true })
const Autores = mongoose.model('Autores', AutoresSchema)
module.exports = Autores