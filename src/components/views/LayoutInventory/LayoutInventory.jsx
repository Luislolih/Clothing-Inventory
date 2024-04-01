import { Outlet } from "react-router-dom";
import InventoryAside from "../../InventoryAside/InventoryAside";
import NavBar from "../../NavBar/NavBar";

const LayoutInventory = () => {
    return (
        <div className="flex flex-col h-screen relative ">
            <NavBar />
            <div className="flex flex-col lg:flex-row h-full">
                <InventoryAside />
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutInventory;
