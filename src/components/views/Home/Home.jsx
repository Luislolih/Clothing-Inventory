import Button from "../../Button/Button";

const Home = () => {
    return (
        <div className="flex flex-col items-center gap-10 h-screen">
            <h1 className="text-2xl text-defaultColor">
                Gestión de Inventario
            </h1>
            <Button
                to="/add"
                title="Agregar Producto"
                className=" bg-defaultColor button"
            />
            <Button
                to="/inventory"
                title="Ver Inventario"
                className=" bg-defaultColor button"
            />
        </div>
    );
};

export default Home;
