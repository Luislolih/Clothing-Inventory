import styles from "./Select.module.css";
import { IoAlertCircle } from "react-icons/io5";
const Select = ({
    title,
    optionDefault,
    options,
    value,
    onChange,
    onBlur,
    errors,
}) => {
    return (
        <div className="flex flex-col gap-2 text-lg">
            <label>{title}</label>
            <select
                className={styles.select}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
            >
                <option value="" disabled>
                    {optionDefault}
                </option>

                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>
            {errors && (
                <div className="text-red-500 text-sm flex items-center gap-1">
                    <IoAlertCircle />
                    <p>{errors}</p>
                </div>
            )}
        </div>
    );
};
export default Select;
