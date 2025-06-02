// Librería para hacer peticiones http al backend
import axios from 'axios'

// Importa react, para trabajar con componentes funcionales
import React, { useEffect, useState } from 'react'

// Hook de React Router que permite redirijir a otra ruta
import { Link, useNavigate } from 'react-router-dom' 

// Definicion del componente
// Es un componente funcional de React
export default function AgregarEmpleado() {

    const urlBaseDepartamentos = "http://localhost:8080/rh-app/departamentos";
    const urlBaseEmpleados = "http://localhost:8080/rh-app/empleados";
     // url donde vamos a hacer la petición

    // Se una useNavegate() para obtener una funcion que permite redireccionar a otra ruta programaticamente
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
    })

    // Estado donde se van a cargar los departamentos
    const [departamentos, setDepartamentos] = useState([]);

    // Estado que guarda la opcion de la lista desplegable
    const [departa, setDepartamento] = useState('');

    // Desectructuracion del objeto empleado
    // Esto sirve para acceder directametne a cada campo del objeto, sin escribir empleado.nombre etc
    const {idEmpleado, nombre, departamento, sueldo} = empleado


    useEffect(()=>{
        cargarDepartamentos();
    }, [])

    const cargarDepartamentos = async () => {
        const resultado = await axios.get(urlBaseDepartamentos);
        setDepartamentos(resultado.data);
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

  
    // Manejador de cambio de inputs
    // Esta funciíon se ejecuta cuando el usuario escribe en un input del formulario
    const onInputChange = (e) => {

        // operador spread operator ...(expandir los atributos) se usa para copiar todo lo que ya tenia empleado y solo modificar una propiedad especifica, segun el name del input (del formulario)
        // e.target.name es el atributo name del input (en el formulario) que cambió
        // e.target.name es el nuevo valor ingresado
        setEmpleado({...empleado, [e.target.name]: e.target.value}) // Actualizamos el estado de empleado
    }

    // Manejador del formulario

    const onSubmit = async (e) => {

        // Evita que el navegador recargue la pagina al enviar el formulario
        e.preventDefault(); 


        // axios.post(...) hace una peticion HTTP POST al backend, enviando los datos del empleado
        // await espera a que la peticion termine antes de continuar
        await axios.post(urlBaseEmpleados, empleado);

        // Redirigimos a la pagina de inicio despues de guardar
        navegacion('/');

    }
    // 

    // Asociamos los datos del formulario con el objeto de empleado y los guardamos.
    return (

    <div className="container">

        {/* Titulo del formulario */}
        <div className="container text-center" style={{margin: "30px"}}>
            <h1>Agregar Empleado</h1>
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
                        value={idEmpleado} // el valor mostrado en el input viene del estado
                        onChange={(elemento)=> onInputChange(elemento)} // Actualiza el estado cuando el usuario escribe
                        />     

                        {/* Lo mismo aplica para los demas inputs */}
            </div>

            {/* Entrada para el nombre */}
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type='text' className="form-control" id='nombre' name='nombre' value={nombre} onChange={(e) => onInputChange(e)}></input> 
            </div>

            {/* Lista desplegable de los departamentos */}
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
                <input type="number" className="form-control" id='sueldoEmpleado' name='sueldo' value={sueldo}
                    onChange={(elemento) => {onInputChange(elemento)}}></input>
            </div>
            
            {/* Botones del formulario */}
            <div className='text-center'>

                {/* Boton que redirije al */}
                <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>

                {/* Boton que redirige al inicio */}
                <Link to={`/`} className='btn btn-danger btn-sm'>Regresar</Link>
            </div>
        </form>
    </div>
  )
}
