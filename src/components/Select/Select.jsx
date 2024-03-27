import styles from "./Select.module.css";
const Select = ({ title, optionDefault, options, value, onChange }) => {
    return (
        <div className="flex flex-col gap-2 text-lg">
            <label>{title}</label>
            <select className={styles.select} value={value} onChange={onChange}>
                <option value="" disabled>
                    {optionDefault}
                </option>

                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>
        </div>
    );
};
export default Select;
