import React from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import CustomInput from "../сomponents/CustomInput";

function LoginPage() {
    const navigate = useNavigate();

    // Валидационные функции
    const validateEmail = (value) => {
        if (!value) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email format.";
    };

    const validatePassword = (value) => {
        if (!value) return "Password is required.";
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(value)
            ? ""
            : "Password must be at least 8 characters and include at least one letter and one number.";
    };

    // Инициализация хука useFormValidation
    const { values, errors, isValid, handleChange, handleBlur } = useFormValidation(
        {
            username: "",
            password: "",
        },
        {
            username: validateEmail,
            password: validatePassword,
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            navigate("/");
        }
    };

    return (
        <div id="main-holder">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} id="login-form">
                <CustomInput
                    name='Email'
                    //id='email'
                    type="text"
                    placeholder="email"
                    value={values.username}
                    error={errors.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    onBlur={() => handleBlur("username")}

                />

                <CustomInput
                    name='Password'
                    //id='password'
                    type="password"
                    placeholder="Password"
                    error={errors.password}
                    value={values.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}

                />

                <button disabled={!isValid} type="submit" className={isValid ? '' : 'login-button' } >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
