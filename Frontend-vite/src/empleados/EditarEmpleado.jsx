// Librería para hacer peticiones http al backend
import axios from 'axios'

// Importa react, para trabajar con componentes funcionales
import React, { useEffect, useState } from 'react'

// Hook de React Router que permite redirijir a otra ruta
import { Link, useNavigate, useParams } from 'react-router-dom' 

// Definicion del componente
// Es un componente funcional de React
export const EditarEmpleado = () => {
    const urlBaseEmpleados = "http://localhost:8080/rh-app/empleados"; // url donde vamos a hacer alguna petición
    const urlBaseDepartamentos = "http://localhost:8080/rh-app/departamentos"

    // Recuperamos el valor del id que recibimos en el url
    const {id} = useParams();


    // Se usa useNavegate() para obtener una funcion que permite redireccionar a otra ruta programaticamente
    let navegacion = useNavigate();
  
    // Estado del empleado
    // empleado es un objeto que contiene los datos del formulario
    // useState({...}) Inicializa el estado con valores vacíos
    // Este estado se actualizará cuando el usuario escriba en los inputs
    const [empleado, setEmpleado] = useState({
        
        idEmpleado:"",
        nombre:"",
        departamento:"",
        sueldo:""
    });

    const [departamentos, setDepartamentos] = useState([]);
    const [departa, setDepartamento] = useState('');
  
    // Se procesa algo cuando se carga un componente
    useEffect(()=>{
        cargarEmpleado();
        cargarDepartamentos();
    },[]);

    // Metodo que obtiene los datos del cliente por id
    const cargarEmpleado = async () => {
        
        // Hacemos la peticion al backend
        const resultado = await axios.get(`${urlBaseEmpleados}/${id}`);

        // Agregamos los datos del usuario al estado del usuario en el componente
        setEmpleado(resultado.data);
    }

    const cargarDepartamentos = async () => {
        const resultado = await axios.get(urlBaseDepartamentos);
        setDepartamentos(resultado.data);
    }

    // Manejador de cambio de inputs
    // Esta funciíon se ejecuta cuando el usuario escribe en un input del formulario
    const onInputChange = (e) => {

        // operador spread operator ...(expandir los atributos) se usa para copiar todo lo que ya tenia empleado y solo modificar una propiedad especifica, segun el name del input (del formulario)
        // e.target.name es el atributo name del input (en el formulario) que cambió
        // e.target.name es el nuevo valor ingresado
        setEmpleado({...empleado, [e.target.name]: e.target.value}) // Actualizamos el estado de empleado
    }

    const cambiarSueldo = (e) => {

        const nombreDepartamento = e.target.value;
        const departamentoSeleccionado = departamentos.find(dep => dep.nombreDepartamento === nombreDepartamento);
            
        // Actualiza el estado seleccionado (opcional, si aún lo usas)
        setDepartamento(nombreDepartamento);        
        // Actualiza el empleado
        setEmpleado({
            ...empleado,
            departamento: departamentoSeleccionado,
            sueldo: departamentoSeleccionado?.sueldoDepartamento || '' // coloca sueldoBase si existe, si no, deja en blanco
        });
        
    }

    // Manejador del formulario
    const onSubmit = async (e) => {

        // Evita que el navegador recargue la pagina al enviar el formulario
        e.preventDefault(); 
        
        // axios.put(...) hace una peticion HTTP PUTal backend, enviando los datos actualizado o editados del empleado
        // await espera a que la peticion termine antes de continuar
        await axios.put(urlBaseEmpleados, empleado);

        // Redirigimos a la pagina de inicio despues de guardar
        navegacion('/');

    }

  return (
    <div className="container">
      {/* Titulo del formulario */}
      <div className="container text-center" style={{margin: "30px"}}>
          <h1>Editar Empleado</h1>
      </div>
      {/* formulario, que al enviarlo, se llama a la funcion onSubmit */}
      <form onSubmit={(elemento) => onSubmit(elemento)}>
          {/* Inputs individuales */}
          {/* Entrada para el id del empleado */}
          <div className="mb-3">
              <label htmlFor="Id" className="form-label">ID</label>
              {/* Cada input esta vinculado al estado. Esto se llama formulario controlado */}
              <input type="number" // Solo recibe numeros
                      className="form-control" 
                      id="idEmpleado" 
                      name="idEmpleado" // Coincide con el campo en el estado.
                      required={true} 
                      disabled={true}
                      value={empleado.idEmpleado} // el valor mostrado en el input viene del estado
                      onChange={(elemento)=> onInputChange(elemento)} // Actualiza el estado cuando el usuario escribe
                      />     
                      {/* Lo mismo aplica para los demas inputs */}
          </div>
          {/* Entrada para el nombre */}
          <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type='text' className="form-control" id='nombre' name='nombre' value={empleado.nombre} onChange={(e) => onInputChange(e)}></input> 
          </div>
          <div className="mb-3">
              <label className='form-label' htmlFor='departamento'>Departamento</label> 
              <select
                  id="departamento"
                  className="form-select"
                  name='departamento'
                  value={departa}
                  required
                  onChange={(e) => cambiarSueldo(e)}
              >
                  <option value="">-- Selecciona un departamento --</option>
                  {departamentos.map((departamento, indice) => (
                  <option key={indice} value={departamento.nombreDepartamento}>
                      {departamento.nombreDepartamento}
                  </option>
                  ))}
              </select>
          </div>
          {/* Entrada para sueldo del empleado */}
          <div className='mb-3'>
              <label htmlFor="sueldo" className="form-label">Sueldo</label>
              <input type="number" className="form-control" id='sueldoEmpleado' name='sueldo' value={empleado.sueldo} 
                  onChange={(elemento) => {onInputChange(elemento)}}></input>
          </div>
          
          {/* Botones del formulario */}
          <div className='text-center'>
              {/* Boton que guarda*/}
              <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
              {/* Link que redirige al inicio */}
              <Link to={`/`} className="btn btn-danger btn-sm">Regresar</Link>
          </div>
      </form>
    </div>
  )
}
