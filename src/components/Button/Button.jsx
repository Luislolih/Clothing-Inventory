import { Link } from "react-router-dom";
const Button = ({ to, title, onClick, onSubmit, type, className }) => {
    return (
        <Link to={to}>
            <button
                className={className}
                type={type}
                onClick={onClick}
                onSubmit={onSubmit}
            >
                {title}
            </button>
        </Link>
    );
};

export default Button;
