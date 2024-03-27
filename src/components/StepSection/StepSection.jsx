import { Link } from "react-router-dom";
import styles from "./StepSection.module.css";
const StepSection = ({ number, step, title, to, isSelected }) => {
    return (
        <Link to={to} className="lg:flex lg:items-center lg:gap-5">
            <div className={styles.number}>{number}</div>
            <div className="hover:text-gray-300 transition-all duration-75 hidden lg:block">
                <p className="text-sm hidden lg:block">{step + number}</p>
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default StepSection;
