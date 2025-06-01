package kase.rh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "departamento")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Departamento {

    @Id
    private Long idDepartamento;
    private String nombreDepartamento;
    private double sueldoDepartamento;
}