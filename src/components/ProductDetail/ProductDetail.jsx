import { useContext } from "react";
import { ProviderContext } from "../../Context/ProductContext";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
const ProductDetail = ({ className }) => {
    const { name, cut, category, price, sizes, description, urlImage } =
        useContext(ProviderContext);

    return (
        <div className={className}>
            <div className="absolute bg-black opacity-75 h-screen w-screen -z-1"></div>
            <div className=" z-0 overflow-scroll flex flex-col h-full items-center bg-defaultColor text-white text-md justify-center w-full lg:w-1/2 gap-3 px-16 py-8 h-auto rounded-lg shadow-md shadow-black">
                <div className="flex items-center gap-2 justify-center">
                    <IoCheckmarkDoneSharp />
                    <h1 className="border-b pb-.5">
                        ¡Producto Creado Exitosamente!
                    </h1>
                </div>
                <img src={urlImage} className="w-2/4 rounded-md"></img>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2>Producto: </h2>
                            <p>{name}</p>
                        </div>
                        <div>
                            <h2>Corte: </h2>
                            <p>{cut}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2>Categoría: </h2>
                            <p>{category}</p>
                        </div>
                        <div>
                            <h2>Precio: </h2>
                            <p>S/. {price}.00</p>
                        </div>
                    </div>
                </div>
                <h2>Tallas: </h2>
                <div className="flex items-center justify-between gap-3">
                    {sizes.map((size, index) => (
                        <p key={index}>
                            {size.name} : {size.quantity}
                        </p>
                    ))}
                </div>
                <h2>Descripción: </h2>
                <p>{description}</p>
                <Link to="/inventory/polos">go panel</Link>
            </div>
        </div>
    );
};

export default ProductDetail;
