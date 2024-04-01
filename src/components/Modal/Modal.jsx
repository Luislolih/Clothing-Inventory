import styles from "./Modal.module.css";

const Modal = ({ onClick, position }) => {
    return (
        <div
            className={`${styles.modal} ${
                position === true ? styles.positionTen : styles.positionLittle
            }`}
            onClick={onClick}
        ></div>
    );
};

export default Modal;
