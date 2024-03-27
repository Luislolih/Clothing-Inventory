import { ProviderContext } from "../../Context/ProductContext";
import Input from "../Input/Input";
import SelectSize from "../SelectSize/SelectSize";
import { useContext } from "react";
import Button from "../Button/Button";
const SecondForm = () => {
    const sizesList = ["S", "M", "L", "XL", "Única"];
    const { sizes, setSizes } = useContext(ProviderContext);
    const { description, setDescription } = useContext(ProviderContext);

    const handleSizeAndQuantity = (selectedSize, quantity, idx) => {
        const newSize = { name: selectedSize, quantity: quantity };
        const updatedSizes = [...sizes];
        updatedSizes[idx] = newSize;
        setSizes(updatedSizes);
    };

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "description") {
            setDescription(value);
        }
    };

    const addSize = () => {
        setSizes([...sizes, { name: "", quantity: 0 }]);
    };

    const deleteSize = (idx) => {
        const copySizes = [...sizes];
        copySizes.splice(idx, 1);
        setSizes(copySizes);
    };
    return (
        <div className="formMargin">
            <div className="formContainerTop">
                <SelectSize
                    title="Tallas"
                    sizesList={sizesList}
                    sizes={sizes}
                    handleSizeAndQuantity={handleSizeAndQuantity}
                    optionDefault="Elige una talla"
                    addSize={addSize}
                    deleteSize={deleteSize}
                />
                <Input
                    title="Descripción"
                    placeholder='ejemplo: "polo de algodón jersey 30/1"'
                    value={description}
                    type="text"
                    onChange={(e) =>
                        handleInputChange("description", e.target.value)
                    }
                />
            </div>
            <div className="flex w-full justify-between mt-5">
                <Button
                    to="/basic-information"
                    title="Anterior"
                    className=" bg-defaultColor button"
                />
                <Button
                    to="/files"
                    title="Siguiente"
                    className=" bg-defaultColor button"
                />
            </div>
        </div>
    );
};

export default SecondForm;
