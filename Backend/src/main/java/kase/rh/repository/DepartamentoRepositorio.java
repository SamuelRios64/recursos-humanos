package kase.rh.repository;

import kase.rh.model.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartamentoRepositorio extends JpaRepository<Departamento, Integer> {
    // Obtiene un ID auto incrementado
    @Query("SELECT COALESCE(MAX(d.idDepartamento), 0) from Departamento d")
    long obtenerId();
}
