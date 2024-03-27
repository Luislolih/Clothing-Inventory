import styles from "./Input.module.css";
import { IoAlertCircle } from "react-icons/io5";
const Input = ({
    title,
    placeholder,
    type,
    value,
    onChange,
    onBlur,
    errors,
}) => {
    return (
        <div className="flex flex-col gap-2 text-lg">
            <label>{title}</label>
            <input
                className={errors ? styles.inputError : styles.input}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
            ></input>
            {errors && (
                <div className="text-red-500 text-sm flex items-center gap-1">
                    <IoAlertCircle />
                    <p>{errors}</p>
                </div>
            )}
        </div>
    );
};

export default Input;
