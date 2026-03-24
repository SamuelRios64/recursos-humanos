package kase.rh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "departamento")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Departamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartamento;
    private String nombreDepartamento;
    private double sueldoDepartamento;
}