import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CrearAutores = () => {
    const [name, setName] = useState('')
    const[errors,setErrors] = useState({})

    const navigate = useNavigate()

    const prevenirCarga = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/crearautores', {
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
        <div>

            <div className=' col-4 contenedor '>
                <div className=' m-0'>
                    <h3> Autores Favorito </h3>
                    <h5> <Link to={`/`} className='d-block '>Inicio</Link> </h5>
                    <p>Crear Autores</p>
                </div>
                <form onSubmit={prevenirCarga} className='border text-center '>
                    <label htmlFor='' className='form-label mt-3'> Nombre del Autor </label>
                    <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
                   <p> {errors.name ? <span className='text-danger'> {errors.name.message}</span> : null }</p>
                    <button className='btn btn-danger mt-3 mb-3'> Crear Autores</button>
                </form>


            </div>

        </div>
    )
}

export default CrearAutores
