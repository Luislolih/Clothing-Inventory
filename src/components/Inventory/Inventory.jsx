import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProviderContext } from "../../Context/ProductContext";
import { FiEdit } from "react-icons/fi";
import ProductEdit from "../ProductEdit/ProductEdit";
const Inventory = () => {
    const [showProducEdit, setShowProductEdit] = useState(false);
    const [idProduct, setIdProduct] = useState("");
    const { productList } = useContext(ProviderContext);
    const { category } = useParams();
    const filteredProducts = productList.filter(
        (product) => product.category === category
    );
    console.log(productList);

    const handleEdit = (id) => {
        console.log(`estás editando el parámetro ${id}`);
        setShowProductEdit(true);
        setIdProduct(id);
    };
    const closeProductEdit = () => {
        setShowProductEdit(false);
    };
    return (
        <div className="w-full h-full flex justify-start inventoryMargin relative text-xs lg:text-md">
            {!category && <>selecciona una categoría</>}
            {showProducEdit && (
                <ProductEdit id={idProduct} closeProduct={closeProductEdit} />
            )}
            {category && (
                <div className="grid grid-cols-11 items-center text-center border border-gray-300 py-1 lg:py-2">
                    <p className="col-span-1">Imagen</p>
                    <p className="col-span-2">Nombre</p>
                    <p className="col-span-1">S</p>
                    <p className="col-span-1">M</p>
                    <p className="col-span-1">L</p>
                    <p className="col-span-1">XL</p>
                    <p className="col-span-1">Única</p>
                    <p className="col-span-1">Total</p>
                    <p className="col-span-1">Editar</p>
                    <p className="col-span-1">Selec.</p>
                </div>
            )}
            <>
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-11 items-center border py-2  border-gray-300  -z-1"
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
                        <p className="col-span-1 flex justify-center ">
                            {product.sizes.reduce(
                                (acc, curr) => acc + +curr.quantity,
                                0
                            )}
                        </p>
                        <FiEdit
                            onClick={() => handleEdit(product.id)}
                            className="col-span-1 cursor-pointer"
                        />
                        <input
                            type="checkbox"
                            value={product.id}
                            className="col-span-1"
                        />
                    </div>
                ))}
            </>
        </div>
    );
};

export default Inventory;
