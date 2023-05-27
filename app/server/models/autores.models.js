const mongoose = require('mongoose')
const AutoresSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"Por favor agregue el nombre del autor" ],
        minLength:[3,"Nombre del autor no puede ser menor a 3 caracteres"]
    }
    
}, { timestamps: true })
const Autores = mongoose.model('Autores', AutoresSchema)
module.exports = Autores