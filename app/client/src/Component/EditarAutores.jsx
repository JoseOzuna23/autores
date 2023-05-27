import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../vista/estilo.css'


const EditarAutores = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/obtener/${id}`)
            .then((res) => {
                console.log(res)
                setName(res.data.name)
                console.log(res.data.name)

            }).catch((error) => {
                console.log(error)
            })


    }, [id]);
    const prevenirCarga = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editar/${id}`, {
            name,
        }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((error) => {
            console.log(error)
            setErrors(error.response.data.errors)


        })

    }
    return (
        <div className=' col-4 contenedor  '>

            <h4 className='mt-4'> Editar Producto</h4>
            <Link to={`/`} className='d-block ' ><h5> Inicio</h5> </Link>
            <form onSubmit={prevenirCarga} className='border text-center '>
                <label htmlFor='' className='form-label mt-3 '> Nombre del autor </label>
                <input type="text" value={name} className='form-control  ' onChange={(e) => setName(e.target.value)} />
                <p> {errors.name ? <span className='text-danger'> {errors.name.message}</span> : null}</p>
                <div className='editar p-2 justify-content-center '>
                    <button className='btn btn-danger me-3 '> Actualizar Autor</button>
                    <Link to={`/`} className='d-block' > <button className='btn btn-success'>Cancelar</button></Link>
                </div>
            </form>




        </div>
    )
}

export default EditarAutores
