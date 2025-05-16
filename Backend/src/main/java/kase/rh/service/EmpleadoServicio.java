package kase.rh.service;

import kase.rh.model.Empleado;
import kase.rh.repository.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Implementacion de los metodos del modelo empleado
@Service
public class EmpleadoServicio implements IEmpleadoServicio{

    // Dependencia de la capa de repositorio para implementar los metodos
    @Autowired
    private EmpleadoRepositorio empleadoRepositorio;

    // Metodo que consulta todos los empleados
    @Override
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    // Metodo que retorna un empleado buscado por su Id
    @Override
    public Empleado buscarEmpleadoPorId(Integer id) {
        return empleadoRepositorio.findById(id).orElse(null);
    }

    // Metodo que guarda o actualiza un empleado
    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    // Metodo que elimina un empleado por su Id
    @Override
    public void eliminarEmpleado(Integer id) {
        empleadoRepositorio.deleteById(id);
    }
}
