import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// Componente que elimina un empleado
export default function EliminarDepartamento() {

    // Obtenemos el id por parametro
    const {id} = useParams();

    // Url base para hacer las peticiones al backend
    const urlBase = "http://localhost:8080/rh-app/departamentos";

    let navegacion = useNavigate(); // Usamos para navegar entre componentes

    // Estado del empleado
    const [departamento, setDepartamento] = useState({
        idDepartamento:"",
        nombreDepartamento:"",
        sueldoDepartamento:""
    });

    // Hook que carga los datos del empleado a eliminar, este se carga cuando se monta el componente
    useEffect(()=>{
        cargarDepartamento();
    }, [id, navegacion])

    // Metodo asincrono que trae los datos del empleado del backend
    const cargarDepartamento = async () => {

        // Hacemos la peticion get para traer los datos del departamento
        const resultado = await axios.get(`${urlBase}/${id}`)
        // Guardamos los datos en el estado del empleado en el componente
        setDepartamento(resultado.data);
    }

    // Metodo para eliminar un empleado
    const EliminarDepartamento = async ()=>{

        // Hacemos la peticion http delete para eliminar el empleado
        await axios.delete(`${urlBase}/${id}`);

        // Despues de eso, navegamos al inicio
        navegacion(`/departamentos`);
    }


  return (

    <div className='container text-center'>

        {/* Titulo */}
        <div className='container text-center' style={{margin: "30px"}}>
            <h1>Eliminar Departamento</h1>
        </div>

        {/* Contendor de la ventanita de confirmacion */}
        <div className='container text-center'>

            {/* Etiquetas con informacion del empleado */}
            <label className='form-label'>¿Deseas eliminar el siguiente empleado?</label><br/>
            <label>ID: <strong>{departamento.idDepartamento}</strong></label><br/>
            <label>Nombre: <strong>{departamento.nombreDepartamento}</strong></label><br/>
            <label>Departamento: <strong>{departamento.sueldoDepartamento}</strong></label><br/>
          
            {/* Botones */}
            <div className="container text-center" style={{margin: "10px"}}>

                {/* Boton que acciona el metodo para eliminar el empleado */}
                <button className="btn btn-warning me-3" onClick={EliminarDepartamento}>Eliminar</button>

                {/* Link que simula un boton que redirige al inicio */}
                <Link to={`/departamentos`} className="btn btn-danger" me-3>Cancelar</Link>
            </div>
        </div>

    </div>
  )
}
