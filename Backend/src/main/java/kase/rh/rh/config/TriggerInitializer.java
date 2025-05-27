package kase.rh.rh.config;

import jakarta.annotation.PostConstruct;  //Anotación para realizar una accion luego de levantar el proyecto
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate; //Accion que ejecuta las sentencias sql directamente
import org.springframework.stereotype.Component;

@Component  //Define la clase como un componente, indicando que se debe ejecutar con el proyecto
public class TriggerInitializer {

    @Autowired
    private JdbcTemplate jdbcTemplate;  //Inyección de la dependencia para la ejecucion de sentencias sql

    @PostConstruct //Indica que el método se ejecuta de forma inmediata despues de levantar el proyecto
    public void createTrigger() {
        jdbcTemplate.execute("DROP TRIGGER IF EXISTS departamento_AD;");  //Se ejecuta la condicion para eliminar el trigger en caso de que ya exista

        //Se ejecuta la sentencia que crea el trigger
        jdbcTemplate.execute("""  
            CREATE TRIGGER departamento_AD
            BEFORE DELETE ON departamento
            FOR EACH ROW
            BEGIN
                UPDATE empleado SET id_departamento = NULL WHERE id_departamento = OLD.id_departamento;
            END;
        """);
    }
}
