import "../styles/login.css"

// Componente reutilizable de boton
export const Button = ({ text, type = "button", icono, disabled }) => {
    return (
        <button className="boton-componente" type={type} disabled={disabled}>
            <span>{text}</span>
            {icono}
        </button>
    )
}
