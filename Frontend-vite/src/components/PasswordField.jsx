import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

// Componente input sobre contraseña
export const PasswordField = ({
    label,
    placeholder,
    value,
    onChange,
    required = true,
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="input-group">
            <label htmlFor={label}>{label}</label>

            <div className="wrapper">
                <input
                    id={label}
                    className="input-password"
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />

                <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
        </div>
    )
}
