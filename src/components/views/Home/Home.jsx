import Button from "../../Button/Button";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start relative h-full">
            <NavBar />
            <p className="pt-10 w-5/6  text-defaultColor text-xl">
                Bienvenido(a) a este mini sistema de inventario enfocado en
                marcas/tiendas de ropa, en el cual podrás crear, editar y
                eliminar tus productos.{" "}
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center text-center gap-3 lg:gap-2 py-14 lg:py-10 w-5/6 lg:w-5/6 h-full text-xl">
                <Button
                    to="/inventory"
                    title="VER INVENTARIO"
                    className=" bg-defaultColor hover:bg-defaultBgHover  button w-full h-40 lg:h-60 flex items-center justify-center"
                />
                <Button
                    to="/add"
                    title="AGREGAR PRODUCTO"
                    className=" bg-defaultColor hover:bg-defaultBgHover  button w-full h-40 lg:h-60 flex items-center justify-center"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
