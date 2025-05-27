package kase.rh.controllers;

import kase.rh.exception.RecursoNoEncontradoExcepcion;
import kase.rh.model.Departamento;
import kase.rh.service.DepartamentoServicio;
import kase.rh.service.EmpleadoServicio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rh-app")
@CrossOrigin(value = "http://localhost:3000")
public class DepartamentoControlador {

    private static final Logger logger = LoggerFactory.getLogger(DepartamentoControlador.class);

    @Autowired
    DepartamentoServicio departamentoServicio;
    //Listarlos todos
    @GetMapping("/departamentos")
    public List<Departamento> listarDepartamentos(){

        var departamentos = departamentoServicio.listarDepartamentos();

        departamentos.forEach((departamento -> logger.info(departamento.toString())));
        return departamentos;
    }

    //Listar por id
    @GetMapping("/departamentos/{id}")
    public ResponseEntity<Departamento> buscarDepartamentoPorId(@PathVariable Integer id){

        Departamento departamento = departamentoServicio.buscarDepartamentoPorId(id);

        if (departamento != null){

            return ResponseEntity.ok(departamento);
        }

        throw new RecursoNoEncontradoExcepcion("No está el id buscado = " + id);
    }

    @PostMapping("/departamentos")
    public Departamento agregarDepartamento(@RequestBody Departamento departamento){
        logger.info("Departamento a agregar = " + departamento.toString());

        return departamentoServicio.guardarDepartamento(departamento);
    }

    @PutMapping("/departamentos")
    public ResponseEntity<Departamento> editarDepartamento(@RequestBody Departamento departamento){

        logger.info("Departament a editar = " + departamento.toString());

        return ResponseEntity.ok(departamentoServicio.guardarDepartamento(departamento));
    }

    @DeleteMapping("/departamentos/{id}")
    public void eliminarDepartamento(@PathVariable Integer id){

        departamentoServicio.eliminarDepartamento(id);
    }
}
