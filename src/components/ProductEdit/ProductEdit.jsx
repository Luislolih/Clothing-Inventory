import { useContext, useState } from "react";
import { ProviderContext } from "../../Context/ProductContext";
import preview from "./preview.jpg";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SelectSize from "../SelectSize/SelectSize";
import ImageUpload from "../ImageUpload/ImageUpload";
import Button from "../Button/Button";
import Successful from "../Successful/Successful";
import ConfirmationDelete from "../ConfirmationDelete/ConfirmationDelete";
import Modal from "../Modal/Modal";
const ProductEdit = ({ id, closeProduct, deleteProduct }) => {
    const { productList, setProductList, cutList, categoryList, sizesList } =
        useContext(ProviderContext);
    const productFiltered = productList.filter((product) => product.id === id);

    const initialProduct =
        productFiltered.length > 0 ? productFiltered[0] : null;

    const defaultName = initialProduct ? initialProduct.name : "";
    const defaultSizes = initialProduct ? initialProduct.sizes : [];
    const defaultCut = initialProduct ? initialProduct.cut : "";
    const defaultCategory = initialProduct ? initialProduct.category : "";
    const defaultPrice = initialProduct ? initialProduct.price : "";
    const defaultDescription = initialProduct ? initialProduct.description : "";
    const defaultUrlImage = initialProduct ? initialProduct.urlImage : "";

    const [name, setName] = useState(defaultName);
    const [sizes, setSizes] = useState(defaultSizes);
    const [cut, setCut] = useState(defaultCut);
    const [category, setCategory] = useState(defaultCategory);
    const [price, setPrice] = useState(defaultPrice);
    const [description, setDescription] = useState(defaultDescription);
    const [urlImage, setUrlImage] = useState(defaultUrlImage);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
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
    const confirmDeleteRender = () => {
        setShowConfirmationDelete(!showConfirmationDelete);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const allSizes = sizesList.map((size) => ({ name: size, quantity: 0 }));
        const updatedSizes = allSizes.map((size) => {
            const existingSize = sizes.find((s) => s.name === size.name);
            return existingSize ? existingSize : size;
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

    return (
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <Modal onClick={closeProduct} position={true} />

            <form
                onSubmit={handleSubmit}
                className="bg-white z-20 px-10 py-10 lg:px-20 lg:py-20 lg:max-w-md overflow-y-auto lg:rounded-lg h-full flex flex-col gap-3 "
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
                <div className="flex flex-col gap-2.5">
                    <p>VISTA PREVIA:</p>
                    <img
                        src={urlImage ? urlImage : preview}
                        className="w-full border border-gray-400 rounded-md "
                    />
                </div>
                <div className="relative gap-3 flex flex-col">
                    {showSuccess && (
                        <Successful
                            title="¡Producto Actualizado Exitosamente!"
                            color="green"
                        />
                    )}

                    {showConfirmationDelete && (
                        <>
                            <ConfirmationDelete
                                className="modalClass bottom-0 modalSec"
                                title="¿Seguro que quieres eliminar el producto?"
                                cancelDelete={confirmDeleteRender}
                                deleteProduct={deleteProduct}
                            />
                        </>
                    )}
                    <div>
                        <Button
                            type="submit"
                            title="Guardar cambios"
                            className=" bg-defaultColor button whitespace-nowrap  w-full"
                        ></Button>
                        <div className="flex justify-between items-center gap-2  relative">
                            <Button
                                type="button"
                                className="z-30 bg-gray-300 text-defaultColor button w-1/2  my-2 h-full"
                                onClick={closeProduct}
                                title="Cancelar"
                            ></Button>
                            <Button
                                type="button"
                                className="z-30 bg-red-500 button w-1/2 whitespace-nowrap my-2 h-full"
                                onClick={confirmDeleteRender}
                                title="Eliminar"
                            ></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductEdit;
