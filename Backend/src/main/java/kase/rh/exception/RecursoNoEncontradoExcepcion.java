package kase.rh.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Definicion basica de la clase de excepcion 404 not found
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursoNoEncontradoExcepcion extends RuntimeException{
    // Constructor
    public RecursoNoEncontradoExcepcion(String mensaje){
        super(mensaje);
    }
}
