import React from "react";

const CustomInput = ({name,
                                 type,
                                 placeholder, error, ...props
                             }) => {
    return (
        <div className="input-with-validation">
            <label htmlFor={name}> {name}</label>
            <input
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
