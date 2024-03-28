import { createContext, useState } from "react";
const ProviderContext = createContext();
const ProductContext = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [productList, setProductList] = useState([
        {
            name: "Polo Skull",
            cut: "clásico",
            category: "polos",
            price: 50,
            sizes: [
                {
                    name: "S",
                    quantity: 10,
                },
                {
                    name: "M",
                    quantity: 20,
                },
                {
                    name: "L",
                    quantity: 30,
                },
                {
                    name: "XL",
                    quantity: 40,
                },
            ],
            description: "Polo de algodón jersey 30/1",
            urlImage: "http://bit.ly/3VAocMN",
        },
        {
            name: "Polo Skate",
            cut: "oversize",
            category: "poleras",
            price: 55,
            sizes: [
                {
                    name: "S",
                    quantity: 10,
                },
                {
                    name: "M",
                    quantity: 20,
                },
                {
                    name: "L",
                    quantity: 30,
                },
                {
                    name: "XL",
                    quantity: 40,
                },
            ],
            description: "Polo de algodón jersey 20/1",
            urlImage: "http://bit.ly/3VAocMN",
        },
    ]);
    const [sizesList, setSizesList] = useState(["S", "M", "L", "XL", "Única"]);
    const [categoryList, setCategoryList] = useState([
        {
            name: "Polos",
            id: 1,
            path: "t-shirts",
        },
        {
            name: "Poleras",
            id: 2,
            path: "hoodies",
        },
    ]);
    const [cutList, setCutList] = useState([
        "Clásico",
        "Manga Larga",
        "Oversize",
        "Boxy Fit",
    ]);
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
                productList,
                setProductList,
                sizesList,
                setSizesList,
                categoryList,
                setCategoryList,
                cutList,
                setCutList,
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
