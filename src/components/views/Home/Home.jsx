import Button from "../../Button/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import NavBar from "../../NavBar/NavBar";
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
            <footer className="flex flex-col  items-center gap-2 w-full bg-defaultColor text-white py-5 lg:py-4 text-sm">
                <div className="flex gap-1 items-center text-lg cursor-pointer">
                    <a
                        href="https://www.linkedin.com/in/luislolih/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:luislolihuamanchumo@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGmail />
                    </a>

                    <a
                        href="https://github.com/Luislolih"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
                <p>Desarrollado por Luis Loli Huamanchumo. 👨‍💻</p>
            </footer>
        </div>
    );
};

export default Home;
