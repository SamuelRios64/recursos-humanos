package kase.rh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Clase modelo de un empleado en el sistema
@Table(name = "empleado")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Empleado {

    @Id
    private Integer idEmpleado;
    private String nombre;
    private String departamento;
    private Integer sueldo;

}
