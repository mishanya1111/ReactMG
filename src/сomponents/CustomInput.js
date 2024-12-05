import React from "react";

const CustomInput = ({name, isValid,
                                 type,
                                 placeholder, error, ...props
                             }) => {
    return (
        <div className="input-with-validation">
            <label htmlFor={name}> {name}</label>
            <input
                className={error === '' ? '' : 'input-error'}
                name={name}
                type={type}
                placeholder={placeholder}
                {...props}
            />
            <div className="error-message">{error ? error : '' }</div>
        </div>
    );
};

export default CustomInput;
