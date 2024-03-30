import { NavLink } from "react-router-dom";
import styles from "./StepSection.module.css";

const StepSection = ({ number, step, stepVisible, title, to }) => {
    return (
        <NavLink to={to} className={styles.navLink}>
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
                <div className={styles.number}>{number}</div>
            </NavLink>
            <NavLink to={to}>
                <div className="hover:text-gray-300 transition-all duration-75 hidden lg:block uppercase">
                    {stepVisible && (
                        <p className="text-sm hidden lg:block">
                            {step + number}
                        </p>
                    )}
                    <p className="text-lg">{title}</p>
                </div>
            </NavLink>
        </NavLink>
    );
};

export default StepSection;
