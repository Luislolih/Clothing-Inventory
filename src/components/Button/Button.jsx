import { Link } from "react-router-dom";
const Button = ({ to, title, onClick, type, className, disabled }) => {
    if (to) {
        return (
            <Link to={to} className={className}>
                {title}
            </Link>
        );
    } else {
        return (
            <button
                className={className}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>
        );
    }
};

export default Button;
