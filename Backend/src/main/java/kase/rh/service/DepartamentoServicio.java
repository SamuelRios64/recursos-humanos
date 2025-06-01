package kase.rh.service;

import kase.rh.model.Departamento;
import kase.rh.repository.DepartamentoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartamentoServicio implements IDepartamentoServicio{

    @Autowired
    private DepartamentoRepositorio departamentoRepositorio;

    @Override
    public List<Departamento> listarDepartamentos() {
        return departamentoRepositorio.findAll();
    }

    @Override
    public Departamento buscarDepartamentoPorId(Integer id) {

        return departamentoRepositorio.findById(id).orElse(null);
    }

    @Override
    public Departamento guardarDepartamento(Departamento departamento) {

        return departamentoRepositorio.save(departamento);
    }

    // Metodo que guarda un departamento y se le agrega un id autoincrementado
    @Override
    public Departamento guardarDepartamentoNuevo(Departamento departamento){
        long idNuevo = departamentoRepositorio.obtenerId() + 1;
        departamento.setIdDepartamento(idNuevo);
        return departamentoRepositorio.save(departamento);

    }

    @Override
    public void eliminarDepartamento(Integer id) {

        departamentoRepositorio.deleteById(id);
    }
}
