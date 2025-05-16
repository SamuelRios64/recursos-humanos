package kase.rh.repository;

import kase.rh.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repositorio de Empleado
@Repository
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer>{}
