package kase.rh.service;

import kase.rh.model.UserEntity;
import kase.rh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

public class UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        UserEntity user = userRepository.findUserByEmail(correo)
                .orElseThrow(() -> new UsernameNotFoundException("El usuario con el correo" + "no existe"));

        List<GrantedAuthority> authorities = new ArrayList<>();

        // Por cada rol de usuario, conviertelo en un authority que Spring entienda y agrégalo a la autenticación
        user.getRoles().forEach(role ->
                authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRole().name())));

        // Toma todos los roles del usuario, entra a cada uno, extrae todos sus permisos y los convierte en authorities para spring
        user.getRoles().stream()
                .flatMap(role -> role.getPermissions().stream())
                .forEach(permission -> {
                    authorities.add(new SimpleGrantedAuthority(permission.getName() ));
                });

            // retorna objeto User de Spring Security
            return new User(
                    user.getName(),
                    user.getPassword(),
                    user.getIsEnabled(),
                    user.getCredentialNoExpired(),
                    user.getAccountNoLocked(),
                    user.getAccountNoExpired(),
                    authorities
            );
    }
}
