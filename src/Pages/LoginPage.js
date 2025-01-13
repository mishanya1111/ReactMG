import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFormValidation from '../hooks/useFormValidation';
import CustomInput from '../сomponents/CustomInput';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/authenticationSlice';
function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validateEmail = value => {
        if (!value) return 'Email is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Invalid email format.';
    };

    const validatePassword = value => {
        if (!value) return 'Password is required.';
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(value)
            ? ''
            : 'Password must be at least 8 characters and include letter and number.';
    };

    const { values, errors, isValid, handleChange, handleBlur } = useFormValidation(
        {
            username: '',
            password: ''
        },
        {
            username: validateEmail,
            password: validatePassword
        }
    );

    const handleSubmit = e => {
        e.preventDefault();
        if (isValid) {
            dispatch(
                logIn({ username: values.username, password: values.password })
            );
            navigate('/');
        }
    };

    return (
        <div id="main-holder">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} id="login-form">
                <CustomInput
                    name="Email"
                    type="text"
                    placeholder="email"
                    value={values.username}
                    error={errors.username}
                    onChange={e => handleChange('username', e.target.value)}
                    onBlur={() => handleBlur('username')}
                    isValid={isValid}
                />

                <CustomInput
                    name="Password"
                    isValid={isValid}
                    type="password"
                    placeholder="Password"
                    error={errors.password}
                    value={values.password}
                    onChange={e => handleChange('password', e.target.value)}
                    onBlur={() => handleBlur('password')}
                />

                <button
                    disabled={!isValid}
                    type="submit"
                    className={isValid ? '' : 'login-button'}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
