package kase.rh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Clase modelo de un permiso en el sistema
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name = "permissions")
public class Permission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // unique = no se pueden repetir nombres
    // nullable = no se puede tener un permiso sin nombre
    // updatable = no se puede modificar el nombre

    @Column(unique = true, nullable = false, updatable = false)
    private String name;
}
