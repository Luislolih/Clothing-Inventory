import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProviderContext } from "../../Context/ProductContext";
import { FiEdit } from "react-icons/fi";
import ProductEdit from "../ProductEdit/ProductEdit";
import Successful from "../Successful/Successful";
import { MdDelete } from "react-icons/md";
import ConfirmationDelete from "../ConfirmationDelete/ConfirmationDelete";
import Modal from "../Modal/Modal";
const Inventory = ({ showProductEdit, setShowProductEdit }) => {
    const [showDeleteProductConfirm, setShowDeleteProductConfirm] =
        useState(false);
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
        } else {
            filteredProductsById = productList.filter(
                (product) => !id.includes(product.id)
            );
        }
        setProductList([...filteredProductsById]);
        setShowSuccessDelete(true);
        setShowProductEdit(false);
        setShowDeleteProductConfirm(false);
        setTimeout(() => {
            setShowSuccessDelete(false);
        }, 2000);
    };
    useEffect(() => {}, [idProductsList]);
    function esUUID(str) {
        const uuidPattern =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidPattern.test(str);
    }

    const handleSelectedItems = (e) => {
        let newArr;
        const value = e.target.value;

        if (e.target.checked === true) {
            setSelectedItems(selectedItems + 1);
            newArr = [...idProductsList];
            if (!esUUID(value)) {
                newArr.push(parseInt(value));
            } else {
                newArr.push(value);
            }
        } else {
            setSelectedItems(selectedItems - 1);
            newArr = idProductsList.filter(
                (productId) =>
                    productId !== parseInt(value) && productId !== value
            );
        }
        setIdProductsList(newArr);
    };

    const handleShowDeleteProduct = () => {
        setShowDeleteProductConfirm(!showDeleteProductConfirm);
    };

    return (
        <div className="w-full h-full flex justify-start inventoryMargin relative text-xs lg:text-sm">
            {showDeleteProductConfirm && (
                <Modal onClick={handleShowDeleteProduct} />
            )}
            {showDeleteProductConfirm && (
                <div>
                    <ConfirmationDelete
                        className="modalClass modalPrincipal"
                        title="¿Estás seguro de eliminar los productos?"
                        cancelDelete={handleShowDeleteProduct}
                        deleteProduct={handleDelete}
                    />
                </div>
            )}

            {!category && (
                <div className="text-lg lg:text-xl text-defaultColor flex  flex-col gap-5 p-6 lg:p-8">
                    <h1 className="text-2xl lg:text-3xl">¡Bienvenido(a)! </h1>
                    <h2>
                        En esta sección podrás ver los productos disponibles en
                        tu inventario y gestionarlos. <br /> Selecciona una
                        categoría.{" "}
                    </h2>
                </div>
            )}

            <div className="px-5 lg:px-6 lg:py-3">
                {category && (
                    <div className="w-full flex justify-end my-4 ">
                        <button
                            onClick={handleShowDeleteProduct}
                            className="flex items-center gap-1 cursor-pointer px-4 py-2  text-white rounded-md buttonDlt"
                            disabled={selectedItems < 1}
                        >
                            <MdDelete />
                            <p>Eliminar </p>
                        </button>
                    </div>
                )}

                {showSuccessDelete && (
                    <Successful title="¡Producto(s) Eliminado(s)!" />
                )}

                {showProductEdit && (
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
                            className="grid grid-cols-11 items-center border py-2  border-gray-300 -z-1"
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
                                <FiEdit
                                    onClick={() => handleEdit(product.id)}
                                />
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
        </div>
    );
};

export default Inventory;
