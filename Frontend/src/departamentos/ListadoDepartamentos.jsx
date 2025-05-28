import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link, useLocation } from 'react-router-dom';

const ListadoDepartamentos = () => {

    // Informacion de la ruta
    const location = useLocation();

    // Url para hacer peticiones al backend
    const urlBase = "http://localhost:8080/rh-app/departamentos";

    // Estado de los departamentos
    const [departamentos, setDepartamentos] = useState([]);

    // Carga departamentos al estado del frontend
    useEffect(() => {
        cargarDepartamentos();
    }, [location])

    // Funcion que carga los departamentos 
    const cargarDepartamentos = async () => {
        const resultado = await axios.get(urlBase);
        setDepartamentos(resultado.data);
    }

  return (
    <div className='container'>

        {/* Titulo */}
        <div className='container text-center' style={{margin: "30px"}}>
          <h3>Departamentos</h3>
        </div>

        {/* Tabla de departamentos */}
        <table className='table table-striped table-hover ailgn-middle'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Sueldo Base</th>
              <th scope='col'></th>

            </tr>
          </thead>
          <tbody>
            {
              // Desempaquetar los departamentos
              departamentos.map((departamento, indice)=> (
                <tr key={indice}>
                  <th scope='row'>{departamento.idDepartamento}</th>
                  <td>{departamento.nombreDepartamento}</td>
                  <td>
                    <NumericFormat value={departamento.sueldoDepartamento}
                    displayType={'text'} prefix={'$ '}/>
                  </td>
                  <td className='text-center'>
                    <div>
                      <Link to={`/editardepartamento/${departamento.idDepartamento}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                      <Link to={`/eliminardepartamento/${departamento.idDepartamento}`} className='btn btn-danger btn-sm'>Eliminar</Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default ListadoDepartamentos