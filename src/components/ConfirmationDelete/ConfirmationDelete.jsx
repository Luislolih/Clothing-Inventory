import Button from "../Button/Button";

const ConfirmationDelete = ({ title, cancelDelete, deleteProduct }) => {
    return (
        <div className="absolute z-40 inset-0 bg-defaultColor text-white  flex flex-col gap-5 px-10  rounded-md items-center justify-center w-full shadow-xl text-lg">
            <p>{title}</p>
            <div className="w-full flex flex-col gap-3 text-sm">
                <Button
                    type="button"
                    className="z-30 bg-red-500 button w-full "
                    onClick={deleteProduct}
                    title="Eliminar producto"
                ></Button>
                <Button
                    type="button"
                    className="z-30 bg-white text-defaultColor button w-full "
                    onClick={cancelDelete}
                    title="Cancelar"
                ></Button>
            </div>
        </div>
    );
};

export default ConfirmationDelete;
