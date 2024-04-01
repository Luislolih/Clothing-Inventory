import { useContext, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { ProviderContext } from "../../Context/ProductContext";
import ProductDetail from "../ProductDetail/ProductDetail";
import preview from "./preview.jpg";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
const ThirdForm = () => {
    const id = uuidv4();
    const [showDetail, setShowDetail] = useState(false);
    const {
        product,
        setProduct,
        name,
        setName,
        cut,
        setCut,
        category,
        setCategory,
        price,
        setPrice,
        sizes,
        setSizes,
        sizesRender,
        setSizesRender,
        description,
        setDescription,
        urlImage,
        setUrlImage,
        productList,
        setProductList,
    } = useContext(ProviderContext);

    const handleUrl = (e) => {
        setUrlImage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const renderedSizeNames = sizesRender.map((size) => size.name);

        const updatedSizes = sizes.map((size) => {
            if (size.quantity === 0 && renderedSizeNames.includes(size.name)) {
                return sizesRender.find(
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
        setProduct(newProduct);
        setProductList([...productList, newProduct]);

        /////
        setShowDetail(true);
        setTimeout(() => {
            setShowDetail(false);
            setName("");
            setCut("");
            setCategory("");
            setPrice("");
            setSizesRender([]);
            setSizes([
                {
                    name: "S",
                    quantity: 0,
                },
                {
                    name: "M",
                    quantity: 0,
                },
                {
                    name: "L",
                    quantity: 0,
                },
                {
                    name: "XL",
                    quantity: 0,
                },
                {
                    name: "Única",
                    quantity: 0,
                },
            ]);
            setDescription("");
            setUrlImage("");
        }, 5000);
    };
    console.log(product);
    return (
        <form className="z-0 formMargin relative" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 lg:gap-10">
                <ImageUpload value={urlImage} onChange={handleUrl} />
                <div className="flex flex-col gap-2.5">
                    <p>VISTA PREVIA:</p>
                    <img
                        src={urlImage ? urlImage : preview}
                        className="w-full lg:w-1/4 border border-gray-400 rounded-md "
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="button bg-red-500 mb-5 lg:m-0"
                    >
                        Crear producto
                    </button>
                </div>
            </div>

            <div className="flex items-start">
                <Button
                    className=" bg-defaultColor button"
                    to="/add/details"
                    title="Anterior"
                    color="blue"
                    type="button"
                />
            </div>

            {showDetail && (
                <ProductDetail className="absolute top-0 bottom-0 lg:inset-0 flex justify-center items-center" />
            )}
        </form>
    );
};

export default ThirdForm;
