import React from 'react'
import { Link } from 'react-router-dom'

export default function navegacion() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black', borderRadius: "8px"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Sistema de Recursos Humanos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    {/* Link del home */}
                    <li className="nav-item">
                      <Link to={`/`} className="nav-link" aria-current="page">Home</Link>
                    </li>

                    {/* Link hacia el formulario de agregar empleado */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/agregar">Agregar Empleado</Link>
                    </li>

                    {/* Link hacia el formulario de agregar departamento */}
                    <li className='nav-item'>
                      <Link className='nav-link' to="/agregardepartamento">Agregar Departamento</Link>
                    </li>

                    {/* Link hacia la tabla de departamentos */}
                    <li className = "nav-item">
                      <Link className='nav-link' to="/departamentos">Departamentos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}