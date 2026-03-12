import "../styles/login.css"

// Componente input reutilizable
export const InputField = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    required,
}) => {
    return (
        <div className="input-group">
            <label htmlFor={label}>{label}</label>

            <div className="wrapper">
                <input
                    id={label}
                    className="input"
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>

        </div>
    )
}
