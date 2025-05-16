package kase.rh.service;

import kase.rh.model.Empleado;

import java.util.List;


// Interface para la Firma de los métodos Empleado
public interface IEmpleadoServicio{

    public List<Empleado> listarEmpleados();
    public Empleado buscarEmpleadoPorId(Integer id);
    public Empleado guardarEmpleado(Empleado empleado);
    public void eliminarEmpleado(Integer id);

}
