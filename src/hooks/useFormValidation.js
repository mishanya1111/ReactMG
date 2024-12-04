import { useState} from "react";

const useFormValidation = (initialValues, validations) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState({});
    

    const validateField = (field, value) => {
        const validation = validations[field];
        if (!validation) return "";

        return validation(value) || "";
    };

    const handleChange = (field, value) => {
        setValues((prev) => ({ ...prev, [field]: value }));
        if (isTouched[field]) {
            const error = validateField(field, value);
            setErrors((prev) => ({ ...prev, [field]: error }));
        }
    };

    const handleBlur = (field) => {
        setIsTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, values[field]);
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const isValid = Object.values(errors).every((error) => error === "") &&
        Object.keys(validations).every((field) => values[field]) &&
        (Object.keys(isTouched).length === Object.keys(values).length);


    return {
        values,
        errors,
        isValid,
        handleChange,
        handleBlur,

    };
};

export default useFormValidation;
