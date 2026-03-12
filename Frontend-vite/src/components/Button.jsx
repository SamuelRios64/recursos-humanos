import "../styles/login.css"

// Componente reutilizable de boton
export const Button = ({ text, type = "button", icono }) => {
    return (
        <button className="boton-componente" type={type}>
            <span>{text}</span>
            {icono}
        </button>
    )
}
