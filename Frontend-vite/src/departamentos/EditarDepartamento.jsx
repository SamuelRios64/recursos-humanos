import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
export const EditarDepartamento = () => {
  // Url
  const urlBaseDepartamentos = "http://localhost:8080/rh-app/departamentos"


  // obtenemos el id de la ruta
  const {id} = useParams();

  // Navegacion
  let navegacion = useNavigate();

  // Estado del departamento
  const [departamento, setDepartamento] = useState({
    idDepartamento: "",
    nombreDepartamento:"",
    sueldoDepartamento:""
  })

  // Cargamos el departamento que vamos a actualizar
  useEffect(()=> {
    cargarDepartamento();
  }, [])

  // Peticion GET del empleado 
  const cargarDepartamento = async () => {
    const resultado = await axios.get(`${urlBaseDepartamentos}/${id}`);
    setDepartamento(resultado.data);
  }

  // Actualizar inputs
  const onInputChange = (e) => {

    setDepartamento({...departamento, [e.target.name] : e.target.value});
  }

  
  // Enviar los datos del formulario al backend
  const onSubmit = async (e) => {

    e.preventDefault();

    await axios.put(urlBaseDepartamentos , departamento);

    navegacion("/departamentos");
  }
  return (
    <div className='container'>
      {/* Titulo */}
      <div className='container text-center' style={{margin: "30px"}}>
        <h1>Editar Departamento</h1>
      </div>

      {/* Formulario */}
      <form onSubmit={(elemento) => onSubmit(elemento)}>

        {/* Id departamento */}
        <div className = "mb-3">

          <label htmlFor = "Id" className = "form-label">ID</label>

          <input type="number" 
          className = "form-control"
          id = "idDepartamento"
          name = "idDepartamento"
          required
          disabled = {true}
          value = {departamento.idDepartamento}
          />
          
        </div> 

        {/* Nombre */}
        <div className = "mb-3">

          <label htmlFor = "nombre" className = "form-label">Nombre</label>
          <input type = "text" className = "form-control" id = "nombreDepartamento" name = "nombreDepartamento" required value = {departamento.nombreDepartamento} onChange={(elemento) => onInputChange(elemento)}>
          </input>
        </div>

        {/* Sueldo base */}
        <div className = "mb-3">
          <label htmlFor = "sueldo" className = "form-label">Sueldo Base</label>
          <input type = "text" className = "form-control" id ="sueldoDepartamento" name = "sueldoDepartamento" value = {departamento.sueldoDepartamento} onChange={(elemento) => onInputChange(elemento)}></input>

        </div>

        {/* Botones */}
        <div className = "text-center">

          <button type = "submit" className = "btn btn-warning btn-sm me-3">Guardar</button>

          <Link to = {"/departamentos"} className = "btn btn-danger btn-sm">Regresar</Link> 
        </div>

      </form>
    </div>
  )
}
