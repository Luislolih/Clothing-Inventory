import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProviderContext } from "../../Context/ProductContext";

const Inventory = () => {
    const { productList } = useContext(ProviderContext);
    const { category } = useParams();
    const filteredProducts = productList.filter(
        (product) => product.category === category
    );
    console.log(productList);
    return (
        <div className="w-full h-full formMargin">
            {!category && <>selecciona una categoría</>}
            {category && (
                <div className="grid grid-cols-10 items-center text-center border border-gray-300 py-2">
                    <p className="col-span-1">Imagen</p>
                    <p className="col-span-2">Nombre</p>
                    <p className="col-span-1">S</p>
                    <p className="col-span-1">M</p>
                    <p className="col-span-1">L</p>
                    <p className="col-span-1">XL</p>
                    <p className="col-span-1">Única</p>
                    <p className="col-span-2">Total</p>
                </div>
            )}
            <>
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-10 items-center border py-2  border-gray-300"
                    >
                        {/* Imagen */}
                        <img
                            className="h-full col-span-1 w-full"
                            src={product.urlImage}
                        ></img>
                        {/* Nombre */}

                        <p className="col-span-2 text-center max-w-sm overflow-wrap-anywhere">
                            {product.name}
                        </p>

                        {/* Tallas */}

                        {product.sizes.map((size) => (
                            <p
                                key={size.name}
                                className="col-span-1 flex justify-center  "
                            >
                                {size.quantity}
                            </p>
                        ))}

                        {/* Cantidad Total */}
                        <p className="col-span-2 flex justify-center ">
                            {product.sizes.reduce(
                                (acc, curr) => acc + +curr.quantity,
                                0
                            )}
                        </p>
                    </div>
                ))}
            </>
        </div>
    );
};

export default Inventory;
