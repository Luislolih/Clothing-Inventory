import { createContext, useState } from "react";
const ProviderContext = createContext();
const ProductContext = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [name, setName] = useState("");
    const [cut, setCut] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [sizes, setSizes] = useState([]);
    const [description, setDescription] = useState("");
    const [urlImage, setUrlImage] = useState("");
    return (
        <ProviderContext.Provider
            value={{
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
            }}
        >
            {children}
        </ProviderContext.Provider>
    );
};

export { ProductContext, ProviderContext };
