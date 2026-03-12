import { useState } from "react"
import "../styles/login.css"

// Iconos
import { IoIosToday } from "react-icons/io"
import { IoLogIn } from "react-icons/io5"

// Componentes del login
import { InputField } from "../components/InputField"
import { PasswordField } from "../components/passwordField"
import { Button } from "../components/Button"

export const Login = () => {
    // Estados para manejar
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // Manejar los datos del form, falta enviar al backend
    const handleSubmit = (e) => {
        e.preventDefault();

        // Activa la carga simulada
        setLoading(true)
        // Manejo del estado de error
        setError("");

        const data = {
            email,
            password,
        };
        console.table(data);

        // Simulación de espera (Esto se borra cuando se conecte con el backend)
        setTimeout(() => {

            if(password !== "1234") {
                setError("Correo o contraseña incorrectos")
            }
            setLoading(false)
        }, 2000)
    }

    return (
        <div className="login-container">
            <h2 className="login-title">Inicio de sesión</h2>

            <IoIosToday className="login-icon" />

            <form onSubmit={handleSubmit}>

                {/* Input email */}
                <InputField
                    label="Correo"
                    type="email"
                    placeholder="correo@dominio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* Input Password */}
                <PasswordField
                    label="Contraseña"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="login-error">{error}</p>}

                {/* Button for send */}
                <Button
                    text={loading ? "Entrando...":"Entrar"}
                    type="submit"
                    icono={!loading && <IoLogIn className="icon-boton" />}
                    disabled={loading}
                />
            </form>
        </div>
    )
}
