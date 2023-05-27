const ControladorAutores = require('../controllers/autores.controllers')

module.exports = (app) =>{
    app.post('/api/crearautores', ControladorAutores.crearAutores)
    app.get('/api/obtenerautores', ControladorAutores.obtenerAutores)
   app.get('/api/obtener/:id', ControladorAutores.obtenerDetalleAutores)
   app.delete('/api/borrar/:id', ControladorAutores.eliminarAutor)
 app.put('/api/editar/:id', ControladorAutores.editarAutores)
    
}