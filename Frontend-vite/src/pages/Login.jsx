import { useState } from 'react'
import "../styles/login.css"
import {IoIosToday} from "react-icons/io"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {IoLogInSharp } from "react-icons/io5"

export const Login = () => {

    // Estamos para almacenar credenciales
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false)

    // funcion para validar con el backend
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email,
            password
        };

        console.table(data);
    }

  return (
    <div className="login-container">
        <h2 className='encabezado-login'>Inicio de sesión</h2>
        <h1><IoIosToday/></h1>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label>Correo</label>
                <input 
                className='input-login'
                type="email"
                placeholder='correo@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className='input-group'>
                <label>Contraseña</label>

                <div className='password-wrapper'>
                    <input 
                    className='input-login' 
                    type={showPassword ? "text" : "password"}
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <span className='span-password' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye /> }
                    </span> 
                </div>

            </div>
            <button className='boton-enviar-login' type='submit'>Entrar <IoLogInSharp color='#01EAE9'/> </button>
        </form>

    </div>
  )
}
