package kase.rh.model;

import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "idDepartamento" , referencedColumnName = "idDepartamento")
    private Departamento departamento;
    private double sueldo;
}
