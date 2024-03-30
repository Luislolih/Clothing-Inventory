import { useContext, useState } from "react";
import { ProviderContext } from "../../Context/ProductContext";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SelectSize from "../SelectSize/SelectSize";
import ImageUpload from "../ImageUpload/ImageUpload";
import Button from "../Button/Button";

const ProductEdit = ({ id, closeProduct }) => {
    const { productList, setProductList, cutList, categoryList, sizesList } =
        useContext(ProviderContext);
    const productFiltered = productList.filter((product) => product.id === id);

    const [name, setName] = useState(productFiltered[0].name);
    const [sizes, setSizes] = useState(productFiltered[0].sizes);
    const [cut, setCut] = useState(productFiltered[0].cut);
    const [category, setCategory] = useState(productFiltered[0].category);
    const [price, setPrice] = useState(productFiltered[0].price);
    const [description, setDescription] = useState(
        productFiltered[0].description
    );
    const [urlImage, setUrlImage] = useState(productFiltered[0].urlImage);
    const [showSuccess, setShowSuccess] = useState(false);

    ///////////////////////

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "name") {
            setName(value);
        } else if (fieldName === "price") {
            setPrice(value);
        } else if (fieldName === "cut") {
            setCut(value);
        } else if (fieldName === "category") {
            setCategory(value);
        } else if (fieldName === "description") {
            setDescription(value);
        } else if (fieldName === "urlImage") {
            setUrlImage(value);
        }
    };
    const handleSizeAndQuantity = (selectedSize, quantity, idx) => {
        const newSize = { name: selectedSize, quantity: parseInt(quantity) };
        const updatedSizes = [...sizes];

        updatedSizes[idx] = newSize;

        setSizes(updatedSizes);
    };
    const addSize = () => {
        setSizes([...sizes, { name: "", quantity: 0 }]);
    };

    const deleteSize = (idx) => {
        const copySizes = [...sizes];
        copySizes.splice(idx, 1);
        setSizes(copySizes);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const renderedSizeNames = sizes.map((size) => size.name);

        const updatedSizes = sizes
            .filter((size) => size.name)
            .map((size) => {
                if (
                    size.quantity === 0 &&
                    renderedSizeNames.includes(size.name)
                ) {
                    return sizes.find(
                        (renderedSize) => renderedSize.name === size.name
                    );
                } else {
                    return size;
                }
            });

        setSizes(updatedSizes);
        const newProduct = {
            id,
            name,
            cut,
            category,
            price,
            sizes: updatedSizes,
            description,
            urlImage,
        };
        /////////
        let indexProduct;
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].id === id) {
                indexProduct = i;
            }
        }

        const newIndexProduct = [...productList];
        newIndexProduct[indexProduct] = newProduct;

        setProductList(newIndexProduct);
        setShowSuccess(true);
        setTimeout(() => closeProduct(false), 1500);
    };

    console.log(sizes);
    return (
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div
                className="absolute bg-black opacity-75 z-10 w-full h-full"
                onClick={closeProduct}
            ></div>

            <form
                onSubmit={handleSubmit}
                className="bg-white z-20 px-20 py-10 max-w-md overflow-y-auto rounded-lg h-screen flex flex-col gap-3"
            >
                <Input
                    title="Nombre del producto"
                    value={name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Select
                    title="Corte"
                    options={cutList}
                    value={cut}
                    optionDefault="Selecciona un Corte"
                    onChange={(e) => handleInputChange("cut", e.target.value)}
                />
                <Select
                    title="Categoría"
                    options={categoryList.map((category) => category.name)}
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

                <SelectSize
                    title="Tallas"
                    sizesList={sizesList}
                    sizes={sizes}
                    optionDefault="Elige una talla"
                    addSize={addSize}
                    deleteSize={deleteSize}
                    handleSizeAndQuantity={handleSizeAndQuantity}
                />
                <Input
                    title="Descripción"
                    value={description}
                    type="text"
                    onChange={(e) =>
                        handleInputChange("description", e.target.value)
                    }
                />

                <ImageUpload
                    value={urlImage}
                    onChange={(e) =>
                        handleInputChange("urlImage", e.target.value)
                    }
                />
                <div className="flex justify-between my-2">
                    <Button
                        className="z-30 bg-red-500 button"
                        onClick={closeProduct}
                        title="Cancelar"
                    ></Button>
                    <Button
                        type="submit"
                        title="Editar producto"
                        className=" bg-defaultColor button"
                    ></Button>
                </div>
                {showSuccess && <p>¡Producto Actualizado Exitosamente!</p>}
            </form>
        </div>
    );
};

export default ProductEdit;
