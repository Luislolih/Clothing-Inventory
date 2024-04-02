import { useState } from "react";
import { MdOutlineInventory } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    console.log(showMenu);
    return (
        <>
            <nav className="flex  items-center px-5 py-5 justify-center shadow-xl text-white bg-defaultColor text-sm w-full">
                <div className="w-full flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-1 text-xl cursor-pointer"
                    >
                        <MdOutlineInventory className="text-3xl" />
                        <p>INVENTORY</p>
                    </Link>

                    <RiMenu2Fill
                        className="lg:hidden text-xl cursor-pointer"
                        onClick={handleShowMenu}
                    />
                    <div className="gap-10 hidden lg:flex">
                        <Link to="/inventory" className="cursor-pointer">
                            VER INVENTARIO
                        </Link>
                        <Link to="/add" className="cursor-pointer">
                            AGREGAR PRODUCTO
                        </Link>
                    </div>
                </div>
            </nav>
            {showMenu && (
                <nav className="h-full text-white cursor-pointer  absolute inset-0">
                    <div className="bg-defaultColor absolute inset-0  flex flex-col items-center justify-start text-2xl pt-20 z-30">
                        <div className="self-end pr-12 mt-14">
                            <IoClose
                                className="text-4xl"
                                onClick={handleShowMenu}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-7 mt-20">
                            <Link to="/" className="cursor-pointer">
                                IR AL INICIO
                            </Link>
                            <Link to="/inventory" className="cursor-pointer">
                                VER INVENTARIO
                            </Link>
                            <Link to="/add" className="cursor-pointer">
                                AGREGAR PRODUCTO
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default NavBar;
