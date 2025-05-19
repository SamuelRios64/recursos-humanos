import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

    // Url para acceder al Backend de Spring Boot
    const urlBase = "http://localhost:8080/rh-app/empleados"


    // Maneja los datos del empleado
    // UseState es un hook de React que sirve para crear una variable de estado en un componente funcional
    const [empleados, setEmpleados] = useState([]);


    // useEffect() Ejecuta codigo cuando se monta el componente
    // El arreglo vacio indica que solo se ejecuta una vez
    useEffect(() => {

        // Ejecuta una funcion para obtener los datos del backend
        cargarEmpleados();
    }, []);

    // Funcion de tipo Asincrona que obtiene los datos del backend
    const cargarEmpleados = async () => {

        // Hacemos una peticion get a la URL base para traer los datos del backend
        // Se usa await para esperar la respuesta
        // axios es una libreria para hacer peticiones HTTP
        const resultado = await axios.get(urlBase);

        // Mostramos los datos cargados
        console.log("Resultado cargar empleados");
        console.log(resultado.data);
        
        // Usamos el metodo para cargar los datos al arreglo
        setEmpleados(resultado.data);

    }

  return (

    <div className='container'>  

        {/* Titulo del proyecto */}
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Sistema de Recursos Humanos</h3>
        </div>

        {/* Se aplica que se intercale un color y que cuando se pase por encima se haga un efecto */}
        <table className="table table-striped table-hover align-middle">

            {/* Cabecero con color oscuro */}
            <thead className="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Sueldo</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {

                // Iteramos el arreglo de empleados
                empleados.map((empleado, indice) => (
                    <tr key={indice}>
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td>
                            <NumericFormat value={empleado.sueldo}
                            displayType={'text'} prefix={"$"}
                            fixedDecimalScale/>
                        </td>
                        <td className='text-center'>
                            <div>
                                <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                                <Link to={`/eliminar/${empleado.idEmpleado}`} className='btn btn-danger btn-sm'>Eliminar</Link>
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