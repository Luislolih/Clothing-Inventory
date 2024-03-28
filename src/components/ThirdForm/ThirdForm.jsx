import { useContext, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { ProviderContext } from "../../Context/ProductContext";
import ProductDetail from "../ProductDetail/ProductDetail";
import Button from "../Button/Button";

const ThirdForm = () => {
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

        /////
        setShowDetail(true);
        setTimeout(() => {
            setShowDetail(false);
            setName("");
            setCut("");
            setCategory("");
            setPrice("");
            setSizes([]);
            setDescription("");
            setUrlImage("");
        }, 5000);
    };

    return (
        <form className="z-0 formMargin relative" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 lg:gap-10">
                <ImageUpload value={urlImage} onChange={handleUrl} />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="button bg-red-500 mb-5 lg:m-0"
                    >
                        Crear producto
                    </button>
                </div>
            </div>
            <Button
                className=" bg-defaultColor button"
                to="/add/details"
                title="Anterior"
                color="blue"
                type="button"
            />

            {showDetail && (
                <ProductDetail className="absolute top-0 bottom-0 lg:inset-0 flex justify-center items-center" />
            )}
        </form>
    );
};

export default ThirdForm;
