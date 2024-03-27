import { useContext } from "react";
import { ProviderContext } from "../../Context/ProductContext";

const ProductDetail = () => {
    const { name, cut, category, price, sizes, description, urlImage } =
        useContext(ProviderContext);

    return (
        <div>
            <h2>Producto: </h2>
            <p>{name}</p>
            <h2>Corte: </h2>
            <p>{cut}</p>
            <h2>Categoría: </h2>
            <p>{category}</p>
            <h2>Precio: </h2>
            <p>{price}</p>
            <h2>Tallas: </h2>
            {sizes.map((size, index) => (
                <p>
                    {size.name} : {size.quantity}
                </p>
            ))}
            <h2>Descripción: </h2>
            <p>{description}</p>
            <img src={urlImage}></img>
        </div>
    );
};

export default ProductDetail;
