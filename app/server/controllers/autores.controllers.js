const Autores = require ('../models/autores.models')

const crearAutores = (req, res)=>{
    Autores.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)

    })
}
const obtenerAutores = (req, res)=>{
    Autores.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })

}

const editarAutores = (req, res)=>{
    Autores.updateOne({_id: req.params.id}, req.body,{runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}


const obtenerDetalleAutores = (req, res)=>{
    Autores.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const eliminarAutor = (req, res)=>{
    Autores.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}




module.exports = {
    crearAutores,
    obtenerAutores,
    editarAutores,
    obtenerDetalleAutores,
    eliminarAutor
    
}
