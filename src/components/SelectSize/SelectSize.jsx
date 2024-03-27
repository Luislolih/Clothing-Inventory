import styles from "./SelectSize.module.css";
import { MdDelete, MdAdd } from "react-icons/md";
const SelectSize = ({
    title,
    sizes,
    sizesList,
    handleSizeAndQuantity,
    optionDefault,
    addSize,
    deleteSize,
}) => {
    const handleSizeChange = (e, idx) => {
        const selectedSize = e.target.value;
        handleSizeAndQuantity(selectedSize, sizes[idx]?.quantity || 0, idx);
    };

    const handleQuantityChange = (e, idx) => {
        const quantity = e.target.value;
        handleSizeAndQuantity(sizes[idx]?.name || "", quantity, idx);
    };
    return (
        <div className="flex flex-col items-start text-lg gap-3 ">
            <label>{title}</label>

            {sizes.map((size, idx) => (
                <div key={idx} className="flex gap-3 items-center h-12">
                    <select
                        className={styles.select}
                        onChange={(e) => handleSizeChange(e, idx)}
                        value={size.name}
                    >
                        <option value="" disabled>
                            {optionDefault}
                        </option>
                        {sizesList.map((sizeOption, index) => (
                            <option key={index}>{sizeOption}</option>
                        ))}
                    </select>
                    <input
                        onChange={(e) => handleQuantityChange(e, idx)}
                        type="number"
                        className={styles.select}
                        value={size.quantity}
                    ></input>

                    <MdDelete
                        className="icon"
                        onClick={() => deleteSize(idx)}
                    />
                </div>
            ))}
            <MdAdd className="icon" onClick={addSize} />
        </div>
    );
};

export default SelectSize;
