package kase.rh.repository;

import kase.rh.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repositorio de permisos
@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long> {}
