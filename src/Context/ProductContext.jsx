import { createContext, useState } from "react";
const ProviderContext = createContext();
import { PiTShirt, PiHoodieLight } from "react-icons/pi";
const ProductContext = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [productList, setProductList] = useState([
        {
            id: 1,
            name: "Polo White",
            cut: "clásico",
            category: "polos",
            price: 50,
            priceCost: 20,
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
                { name: "Única", quantity: 50 },
            ],
            description: "Polo de algodón jersey 30/1",
            urlImage: "http://bit.ly/3VAocMN",
        },
        {
            id: 2,
            name: "Polera Rat Train",
            cut: "oversize",
            category: "poleras",
            price: 55,
            priceCost: 20,
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
                { name: "Única", quantity: 50 },
            ],
            description: "Polera de franela 24/1",
            urlImage: "https://bit.ly/49hyAMA",
        },
        {
            id: 3,
            name: "Polo Oversize Death",
            cut: "oversize",
            category: "polos",
            price: 50,
            priceCost: 20,
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
                { name: "Única", quantity: 50 },
            ],
            description: "Polo de algodón jersey 30/1",
            urlImage: "https://bit.ly/3TwPaCq",
        },
    ]);
    const [sizesList, setSizesList] = useState(["S", "M", "L", "XL", "Única"]);
    const [categoryList, setCategoryList] = useState([
        {
            name: "polos",
            id: 1,
            path: "polos",
            icon: <PiTShirt />,
        },
        {
            name: "poleras",
            id: 2,
            path: "poleras",
            icon: <PiHoodieLight />,
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
    const [sizesRender, setSizesRender] = useState([]);
    const [sizes, setSizes] = useState([
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
                sizesRender,
                setSizesRender,
            }}
        >
            {children}
        </ProviderContext.Provider>
    );
};

export { ProductContext, ProviderContext };
