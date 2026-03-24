package kase.rh.config;

import kase.rh.model.*;
import kase.rh.repository.DepartamentoRepository;
import kase.rh.repository.PermissionRepository;
import kase.rh.repository.RoleRepository;
import kase.rh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private ApplicationConfig applicationConfig;

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Override
    public void run(String... args) throws Exception {
        initializePermisosAndUsuarios();
    }

    private void initializePermisosAndUsuarios() {
        System.out.println("Inicializando datos de prueba...");
        var passwordEncoder = applicationConfig.passwordEncoder();
        userRepository.deleteAll();
        roleRepository.deleteAll();
        permissionRepository.deleteAll();
        departamentoRepository.deleteAll();

        Permission creatPermission = Permission.builder().name("CREATE").build();
        Permission readPermission = Permission.builder().name("READ").build();
        Permission updatePermission = Permission.builder().name("UPDATE").build();
        Permission deletePermission = Permission.builder().name("DELETE").build();
        permissionRepository.saveAll(List.of(creatPermission, readPermission, updatePermission, deletePermission));

        Role roleAdmin = Role.builder()
                .role(RoleEnum.ADMIN)
                .permissions(Set.of(creatPermission, readPermission, updatePermission, deletePermission))
                .build();
        Role roleUser = Role.builder()
                .role(RoleEnum.USER)
                .permissions(Set.of(readPermission))
                .build();
        roleRepository.saveAll(List.of(roleAdmin, roleUser));

        Departamento sistemas = Departamento.builder()
                .nombreDepartamento("Sistemas")
                .sueldoDepartamento(1000)
                .build();
        sistemas = departamentoRepository.save(sistemas);

        UserEntity samuel = UserEntity.builder()
                .id(10281340791L)
                .name("Samuel")
                .departamento(sistemas)
                .sueldo(1000)
                .email("samuelriosrendon12@gmail.com")
                .password(passwordEncoder.encode("1234"))
                .isEnabled(true)
                .accountNoExpired(true)
                .accountNoLocked(true)
                .credentialNoExpired(true)
                .roles(Set.of(roleAdmin))
                .build();

        System.out.println(samuel);

        userRepository.saveAll(List.of(samuel));
    }
}
