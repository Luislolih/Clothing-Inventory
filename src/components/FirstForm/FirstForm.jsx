import { useContext, useEffect } from "react";
import { ProviderContext } from "../../Context/ProductContext";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";

const FirstForm = () => {
    const {
        name,
        setName,
        price,
        setPrice,
        cut,
        setCut,
        category,
        setCategory,
        categoryList,
        cutList,
        errors,
        setErrors,
    } = useContext(ProviderContext);
    const regexName = /^[a-zA-Z\s]*$/;
    useEffect(() => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };

            if (name.trim()) {
                delete newErrors.name;
            }
            if (regexName.test(name)) {
                delete newErrors.name;
            }
            if (cut) {
                delete newErrors.cut;
            }
            if (category) {
                delete newErrors.category;
            }
            if (price) {
                delete newErrors.price;
            }
            return newErrors;
        });
    }, [name, price, cut, category]);
    const handleInputChange = (fieldName, value) => {
        if (fieldName === "name") {
            setName(value);
        } else if (fieldName === "price") {
            const newPrice = value < 0 ? 0 : value;
            setPrice(newPrice);
        } else if (fieldName === "cut") {
            setCut(value);
        } else if (fieldName === "category") {
            setCategory(value);
        }
    };

    const handleBlur = (fieldName) => {
        if (fieldName === "name") {
            if (!name.trim()) {
                setErrors({
                    ...errors,
                    name: "El campo nombre es requerido",
                });
            } else if (!regexName.test(name)) {
                setErrors({
                    ...errors,
                    name: "El nombre no puede incluir números ni caracteres especiales (#$%&/)",
                });
            }
        } else if (fieldName === "cut") {
            if (!cut) {
                console.log("ENTRASTE AL CUUUUUUUT");
                setErrors({
                    ...errors,
                    cut: "Debes seleccionar un corte",
                });
            }
        } else if (fieldName === "category") {
            if (!category) {
                setErrors({
                    ...errors,
                    category: "Debes seleccionar una categoría",
                });
            }
        } else if (fieldName === "price") {
            if (!price.trim()) {
                setErrors({
                    ...errors,
                    price: "El campo precio es requerido",
                });
            }
        }
    };
    console.log(errors);
    return (
        <div className="formMargin">
            {" "}
            <div className="formContainerTop">
                <Input
                    title="Nombre del producto"
                    placeholder="ejemplo: polo"
                    value={name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    errors={errors.name}
                    onBlur={() => handleBlur("name")}
                />
                <Select
                    title="Corte"
                    options={cutList}
                    value={cut}
                    optionDefault="Selecciona un Corte"
                    onChange={(e) => handleInputChange("cut", e.target.value)}
                    errors={errors.cut}
                    onBlur={() => handleBlur("cut")}
                />
                <Select
                    title="Categoría"
                    options={categoryList.map((category) => category.name)}
                    value={category}
                    optionDefault="Selecciona una Categoría"
                    onChange={(e) =>
                        handleInputChange("category", e.target.value)
                    }
                    errors={errors.category}
                    onBlur={() => handleBlur("category")}
                />
                <Input
                    title="Precio"
                    placeholder="ejemplo: 50"
                    value={price}
                    type="number"
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    errors={errors.price}
                    onBlur={() => handleBlur("price")}
                />
            </div>
            <div className="flex w-full justify-end mt-5">
                <Button
                    to="/add/details"
                    title="Siguiente"
                    className=" bg-defaultColor button"
                />
            </div>
        </div>
    );
};

export default FirstForm;
