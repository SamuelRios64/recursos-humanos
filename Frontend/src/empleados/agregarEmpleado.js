import React from 'react'

export default function agregarEmpleado() {
  return (
    <div className="container">

        {/* Titulo del formulario */}
        <div className="container text-center" style={{margin: "30px"}}>
            <h1>Agregar Empleado</h1>
        </div>

        <form>

            {/* Entrada para el id del empleado */}
            <div className="mb-3">
                <label htmlFor="Id" className="form-label">ID</label>
                <input type="number" className="form-control" id="idEmpleado" name="idEmpleado" required={true}/>     
            </div>

            {/* Entrada para el nombre */}
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type='text' className="form-control" id='nombreEmpleado' name='nombreEmpleado'></input> 
            </div>

            {/* Entreada para el departamento */}
            <div className="mb-3">
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <input type="text" className="form-control" id="departamentoEmpleado" name='departamentoEmpleado'></input>
            </div>

            {/* Entrada para sueldo del empleado */}
            <div className='mb-3'>
                <label htmlFor="sueldo" className="form-label">Sueldo</label>
                <input type="number" className="form-control" id='sueldoEmpleado' name='sueldoEmpleado'></input>
            </div>
            
            <div className='text-center'>

                <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
                <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
            </div>
        </form>
    </div>
  )
}
