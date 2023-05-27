import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom'




const ListaAutores = () => {

    const [lista, setLista] = useState([])
  

    
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:8000/api/obtenerautores')
            .then((res) => {
                console.log(res)
                setLista(res.data)
            }).catch((error) => {
                console.log(error)
            })


    }, [])


    
    const borrarAutores = (id) => {       
        axios.delete(`http://localhost:8000/api/borrar/${id}`)
            .then((res) => {
                console.log(res)
                window.location.reload(); 
                navigate('/')
                console.log("mostrar", res.data)
            }).catch((error) => {
                console.log(error)                
            })

    }
    
    
    return (
        <div className='col-6 contenedor'>

            <h4> Autores Favoritos</h4>
            <h5> <Link to={`/new`} className='d-block '>Autor nuevo</Link> </h5>
            <p>Listas de autores</p>

            <table className="table table-bordered text-center" >
                <thead>
                    <tr className='bg-secondary'>
                        <th>Autores</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        lista.map((autor) => (
                            <tr key={autor._id}>
                                <td>
                                    <div>
                                        {autor.name}
                                    </div>
                                </td>

                                <td className='d-flex justify-content-center '>
                                    <Link to={`/editar/${autor._id}`} className='d-block'>
                                        <button className='btn btn-success me-3'> Editar </button>
                                    </Link>
                                    <button className='btn btn-danger 'onClick={()=>borrarAutores(autor._id)} > Eliminar </button>
                                   
                                </td>

                            </tr>


                        ))
                    }


                </tbody>
            </table>






        </div>
    )
}

export default ListaAutores
