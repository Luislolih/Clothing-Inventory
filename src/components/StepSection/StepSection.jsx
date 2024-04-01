import { NavLink } from "react-router-dom";
import styles from "./StepSection.module.css";

const StepSection = ({ number, step, stepVisible, title, to, icon }) => {
    return (
        <NavLink to={to} className={styles.navLink}>
            <div to={to} className={styles.isActive}>
                {!icon && <div className={styles.number}>{number}</div>}
                {icon && <div className={styles.number}>{icon}</div>}
            </div>
            <div to={to}>
                <div className="hover:text-gray-300 transition-all duration-75 hidden lg:block uppercase">
                    {stepVisible && (
                        <p className="text-sm hidden lg:block">
                            {step + number}
                        </p>
                    )}
                    <p className="text-lg">{title}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default StepSection;
