import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/listadoEmpleados.js";
import AgregarEmpleado from "./empleados/agregarEmpleado.js"
import Navegacion from "./template/navegacion";

function App() {
  return (
    <div className="container">

      {/* Inicia el enrutador */}
      <BrowserRouter>

        {/* Este componente es el nav, se va a mostrar en cualquier ruta de la aplicación */}
        <Navegacion/>

        {/* Definición de rutas */}
        <Routes>

          {/* En la ruta base / va a estar el listado */}
          <Route exact path="/" element={<ListadoEmpleados/>}/>

          {/* En la ruta agregar va a estar el formulario */}
          <Route exact path="/agregar" element={<AgregarEmpleado/>}/>

          {/* Y de aquí para bajo se llaman los componentes con sus rutas donde se van a mostrar */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
