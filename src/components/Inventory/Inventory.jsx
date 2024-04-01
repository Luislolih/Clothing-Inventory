import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProviderContext } from "../../Context/ProductContext";
import { FiEdit } from "react-icons/fi";
import ProductEdit from "../ProductEdit/ProductEdit";
import Successful from "../Successful/Successful";
import { MdDelete } from "react-icons/md";
const Inventory = () => {
    const [showProducEdit, setShowProductEdit] = useState(false);
    const [showSuccessDelete, setShowSuccessDelete] = useState(false);
    const [idProduct, setIdProduct] = useState("");
    const [idProductsList, setIdProductsList] = useState([]);
    const [selectedItems, setSelectedItems] = useState(0);
    const { productList, setProductList } = useContext(ProviderContext);
    const { category } = useParams();
    const filteredProductsByCategory = productList.filter(
        (product) => product.category === category
    );

    const handleEdit = (id) => {
        setShowProductEdit(true);
        setIdProduct(id);
    };
    const handleDelete = () => {
        deleteProduct(idProductsList);
        setIdProductsList([]);
        setSelectedItems(0);
    };
    const closeProductEdit = () => {
        setShowProductEdit(false);
    };
    const deleteProduct = (id) => {
        let filteredProductsById;
        if (!Array.isArray(id)) {
            filteredProductsById = productList.filter(
                (product) => product.id !== id
            );
            console.log("entraste al if!!!!!!");
        } else {
            filteredProductsById = productList.filter(
                (product) => !id.includes(product.id)
            );
            console.log("entraste al ELSE!!!!!!");
        }
        setProductList([...filteredProductsById]);
        setShowSuccessDelete(true);
        setShowProductEdit(false);
        setTimeout(() => {
            setShowSuccessDelete(false);
        }, 2000);
    };
    useEffect(() => {}, [idProductsList]);
    const handleSelectedItems = (e) => {
        let newArr;
        if (e.target.checked === true) {
            setSelectedItems(selectedItems + 1);
            newArr = [...idProductsList];
            newArr.push(parseInt(e.target.value));
        } else {
            setSelectedItems(selectedItems - 1);

            newArr = idProductsList.filter(
                (productId) => productId !== parseInt(e.target.value)
            );
        }
        setIdProductsList(newArr);
    };
    console.log(idProductsList);
    return (
        <div className="w-full h-full flex justify-start inventoryMargin relative text-xs lg:text-sm">
            {!category && <>selecciona una categoría</>}
            {selectedItems > 0 && (
                <div
                    className="w-full flex justify-end my-4 "
                    onClick={handleDelete}
                >
                    <div className="flex items-center gap-1 cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md">
                        <MdDelete />
                        <p>Eliminar </p>
                    </div>
                </div>
            )}

            {showSuccessDelete && (
                <Successful title="¡Producto(s) Eliminado(s)!" />
            )}

            {showProducEdit && (
                <ProductEdit
                    id={idProduct}
                    closeProduct={closeProductEdit}
                    deleteProduct={() => deleteProduct(idProduct)}
                />
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
                {filteredProductsByCategory.map((product) => (
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
                        <p className="col-span-1 flex justify-center">
                            {product.sizes.reduce(
                                (acc, curr) => acc + +curr.quantity,
                                0
                            )}
                        </p>
                        {/* Icono Editar */}
                        <div className="col-span-1 cursor-pointer flex justify-center items-center">
                            <FiEdit onClick={() => handleEdit(product.id)} />
                        </div>
                        {/*  Select */}
                        <input
                            type="checkbox"
                            value={product.id}
                            className="col-span-1"
                            onChange={handleSelectedItems}
                        />
                    </div>
                ))}
            </>
        </div>
    );
};

export default Inventory;
