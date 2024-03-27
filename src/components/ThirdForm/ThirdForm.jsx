import { useContext } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { ProviderContext } from "../../Context/ProductContext";

import Button from "../Button/Button";

const ThirdForm = () => {
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
        description,
        setDescription,
        urlImage,
        setUrlImage,
    } = useContext(ProviderContext);

    const handleUrl = (e) => {
        setUrlImage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("hiciste submit!!!!");
        const newProduct = {
            name,
            cut,
            category,
            price,
            sizes,
            description,
            urlImage,
        };
        setProduct(newProduct);
        setName("");
        setCut("");
        setCategory("");
        setPrice("");
        setSizes([]);
        setDescription("");
        setUrlImage("");
    };

    console.log(product);

    return (
        <form className="formMargin" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 lg:gap-10">
                <ImageUpload value={urlImage} onChange={handleUrl} />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="button bg-red-500 mb-2 lg:m-0"
                    >
                        Crear producto
                    </button>
                </div>
            </div>
            <Button
                className=" bg-defaultColor button"
                to="/details"
                title="Anterior"
                color="blue"
                type="button"
            />
        </form>
    );
};

export default ThirdForm;
