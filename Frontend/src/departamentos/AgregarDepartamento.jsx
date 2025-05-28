import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Componente de agregar un departamento
const AgregarDepartamento = () => {

  // Navegacion
  let navegacion = useNavigate();

  // Estado
  const [departamento, setDepartamneto] = useState({
    idDepartamento:"",
    nombreDepartamento:"",
    sueldoDepartamento:""
  })

  // actualizar el estado con los valores de los inputs del formulario
  const cambiarInput = (e) => {

    const {name,value} = e.target;

    setDepartamneto(prevState =>({...prevState, [name]:value}))

  }

  // Manejador del formulario
  const onSubmit = async (e) => {
    e.preventDefault();

    const urlBase = "http://localhost:8080/rh-app/departamentos";

    await axios.post(urlBase, departamento);

    navegacion("/departamentos")
  }

  return (
    <div className='container'>

      {/* Titulo */}
      <div className='container text-center' style={{margin: "30px"}}>
          <h1>Agregar Departamento</h1>
      </div>

      {/* Formulario */}
      <form onSubmit={onSubmit}>

        <div className='mb-3'>
          <label htmlFor="Nombre" className='form-label'>Nombre</label>
          <input type="text" id='nombreDepartamento' name='nombreDepartamento' required={true} value={departamento.nombreDepartamento} onChange={(elemento) => cambiarInput(elemento)} className='form-control' />
        </div>

        <div className='mb-3'>
          <label htmlFor="sueldoDepartamento" className='form-label'>Sueldo Base</label>
          <input type="number" className='form-control' name='sueldoDepartamento' id='sueldoDepartamento' required value={departamento.sueldoDepartamento} onChange={(elemento) => cambiarInput(elemento)}/>
        </div>

        <div className='text-center'>
          <button type="submit" className='btn btn-warning btn-sm me-3'>Guardar</button>
          <Link to={`/departamentos`} className= 'btn btn-danger btn-sm'>Regresar</Link>
        </div> 
      </form>
    </div>
  )
}

export default AgregarDepartamento