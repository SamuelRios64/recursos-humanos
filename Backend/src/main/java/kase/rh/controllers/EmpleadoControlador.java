package kase.rh.controllers;

import kase.rh.exception.RecursoNoEncontradoExcepcion;
import kase.rh.model.Empleado;
import kase.rh.service.EmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
// http://localhost:8080/rh-app
@RequestMapping("/rh-app")
// Anotacion para hacer y recibir peticiones desde el frontend
@CrossOrigin(value = "http://localhost:3000")
public class EmpleadoControlador {

    // Atributo para el manejo del logger
    private static final Logger logger = LoggerFactory.getLogger(EmpleadoControlador.class);

    // Dependencia de Capa de servicio
    @Autowired
    private EmpleadoServicio empleadoServicio;

    // http://localhost:8080/rh-app/empleados
    @RequestMapping(value = "/empleados", method = RequestMethod.GET)
    public List<Empleado> obtenerEmpleados(){
        // Consultamos todos los empleados de la bd
        var empleados = empleadoServicio.listarEmpleados();
        empleados.forEach((empleado -> logger.info(empleado.toString())));
        return empleados;
    }

    // Metodo que guarda un empleado
    // http://localhost:8080/rh-app/empleados
    @RequestMapping(value="/empleados", method = RequestMethod.POST)
    public Empleado agregarEmpleado(@RequestBody Empleado empleado){
        logger.info("Empleado a agregar: " + empleado.toString());
        return empleadoServicio.guardarEmpleado(empleado);
    }

    // Metodo que busca un empleado por su id
    // http://localhost:8080/rh-app/empleados/id  id=algun id de empleado
    @RequestMapping(value="/empleados/{id}", method= RequestMethod.GET)
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Integer id){
        Empleado empleado = empleadoServicio.buscarEmpleadoPorId(id);

        if (empleado != null){
            return ResponseEntity.ok(empleado);
        }
        else{
            throw new RecursoNoEncontradoExcepcion("No se encontró el empleado id: " + id);
        }
    }

}
