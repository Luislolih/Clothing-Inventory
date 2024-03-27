import styles from "./SelectSize.module.css";

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
        <div className="flex flex-col items-start text-lg">
            <label>{title}</label>

            {sizes.map((size, idx) => (
                <div key={idx} className="flex gap-3">
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

                    <button onClick={() => deleteSize(idx)}>Eliminar</button>
                </div>
            ))}
            <button onClick={addSize}>Agregar Talla</button>
        </div>
    );
};

export default SelectSize;
