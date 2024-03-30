import { IoMdCheckmark } from "react-icons/io";
import styles from "./Succesful.module.css";
const Successful = ({ title, color }) => {
    return (
        <div
            className={`${styles.container} ${
                color === "green" ? styles.greenBg : styles.redBg
            }`}
        >
            <IoMdCheckmark />
            <p>{title}</p>
        </div>
    );
};

export default Successful;
