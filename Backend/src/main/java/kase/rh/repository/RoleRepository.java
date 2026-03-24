package kase.rh.repository;

import kase.rh.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Repositorio de roles
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {}
