import React from "react";

const CustomInput = ({
                                 type,
                                 placeholder, error, ...props
                             }) => {
    return (
        <div className="input-with-validation">
            <input
                type={type}
                placeholder={placeholder}
                {...props}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default CustomInput;
