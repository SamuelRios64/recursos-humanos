import React from 'react'
import ListadoEmpleados from "../empleados/ListadoEmpleado.jsx"
import { Routes, Route} from "react-router-dom"
import {Navegacion} from '../template/Navegacion'
import AgregarEmpleado from '../empleados/AgregarEmpleado.jsx'
import { EditarEmpleado } from '../empleados/EditarEmpleado.jsx'
import { EliminarEmpleado } from '../empleados/EliminarEmpleado.jsx'
import { ListadoDepartamento } from '../departamentos/ListadoDepartamento.jsx'
import { AgregarDepartamento } from '../departamentos/AgregarDepartamento.jsx'
import { EditarDepartamento } from '../departamentos/EditarDepartamento.jsx'
import { EliminarDepartamento } from '../departamentos/EliminarDepartamento.jsx'

// Enrutador
const AppRouter = () => {
  return (
    <>
    {/* Este componente es el nav, se va a mostrar en cualquier ruta de la aplicación */}
      <Navegacion/>

      {/* Definición de rutas */}
      <Routes>
          {/* En la ruta base / va a estar el listado */}
          <Route exact path="/" element={<ListadoEmpleados/>}/>

          {/* En la ruta agregar va a estar el formulario */}
          <Route exact path="/agregar" element={<AgregarEmpleado/>}/>

          {/* En esta ruta va  a estar un formulario para editar un cliente */}
          <Route exact path ="/editar/:id" element={<EditarEmpleado/>}/>

          {/* Ruta para eliminar un empleado */}
          <Route exact path="/eliminar/:id" element={<EliminarEmpleado/>}/>

          {/* En esta ruta se van a estar listado los departamentos */}
          <Route exact path="/departamentos" element={<ListadoDepartamento/>}/>

          {/* En esta ruta va a estar el formulario para agregar departamentos */}
          <Route exact path="/agregardepartamento" element={<AgregarDepartamento/>}/>

          {/* En esta va a estar un formulario para actualizar departamentos */}
          <Route exact path="/editardepartamento/:id" element={<EditarDepartamento/>}/>

          {/* En esta ruta va a eliminar un departamento */}
          <Route exact path="/eliminardepartamento/:id" element={<EliminarDepartamento/>}/>

          {/* Y de aquí para bajo se llaman los componentes con sus rutas donde se van a mostrar */}
      </Routes>
    </>
  )
}

export default AppRouter