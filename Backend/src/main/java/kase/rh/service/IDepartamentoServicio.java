package kase.rh.service;

import kase.rh.model.Departamento;

import java.util.List;

public interface IDepartamentoServicio {

    public List<Departamento> listarDepartamentos();
    public Departamento buscarDepartamentoPorId(Integer id);
    public Departamento guardarDepartamento(Departamento departamento);
    public void eliminarDepartamento(Integer id);
}
