import { NavLink } from "react-router-dom";
import styles from "./StepSection.module.css";
import { useState } from "react";
const StepSection = ({ number, step, title, to }) => {
    return (
        <div className={styles.navLink}>
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
                <p className={styles.number}>{number}</p>
            </NavLink>
            <NavLink to={to}>
                <div className="hover:text-gray-300 transition-all duration-75 hidden lg:block">
                    <p className="text-sm hidden lg:block">{step + number}</p>
                    <p>{title}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default StepSection;
