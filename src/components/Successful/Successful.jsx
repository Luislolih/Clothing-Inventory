import { IoMdCheckmark } from "react-icons/io";
const Successful = ({ title }) => {
    return (
        <div className="flex items-center justify-center gap-2 p-2 bg-green-500 text-white text-sm rounded-sm ">
            <IoMdCheckmark />
            <p className="">{title}</p>
        </div>
    );
};

export default Successful;
