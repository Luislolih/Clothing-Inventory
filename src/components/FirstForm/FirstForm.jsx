import { useContext } from "react";
import { ProviderContext } from "../../Context/ProductContext";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";

const optionsCorte = ["Clásico", "Manga Larga", "Oversize", "Boxy Fit"];
const optionsCategoría = ["Polos", "Poleras"];
const FirstForm = () => {
    const { name, setName } = useContext(ProviderContext);
    const { price, setPrice } = useContext(ProviderContext);
    const { cut, setCut } = useContext(ProviderContext);
    const { category, setCategory } = useContext(ProviderContext);

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "name") {
            setName(value);
        } else if (fieldName === "price") {
            setPrice(value);
        } else if (fieldName === "cut") {
            setCut(value);
        } else if (fieldName === "category") {
            setCategory(value);
        }
    };
    return (
        <div className="formMargin">
            {" "}
            <div className="formContainerTop">
                <Input
                    title="Nombre del producto"
                    placeholder="ejemplo: polo"
                    value={name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Select
                    title="Corte"
                    options={optionsCorte}
                    value={cut}
                    optionDefault="Selecciona un Corte"
                    onChange={(e) => handleInputChange("cut", e.target.value)}
                />
                <Select
                    title="Categoría"
                    options={optionsCategoría}
                    value={category}
                    optionDefault="Selecciona una Categoría"
                    onChange={(e) =>
                        handleInputChange("category", e.target.value)
                    }
                />
                <Input
                    title="Precio"
                    placeholder="ejemplo: 50"
                    value={price}
                    type="number"
                    onChange={(e) => handleInputChange("price", e.target.value)}
                />
            </div>
            <div className="flex w-full justify-end mt-5">
                <Button
                    to="/details"
                    title="Siguiente"
                    className=" bg-defaultColor button"
                />
            </div>
        </div>
    );
};

export default FirstForm;
