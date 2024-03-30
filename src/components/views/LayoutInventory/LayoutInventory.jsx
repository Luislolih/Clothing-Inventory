import { Outlet } from "react-router-dom";
import InventoryAside from "../../InventoryAside/InventoryAside";

const LayoutInventory = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen ">
            <InventoryAside />
            <Outlet />
        </div>
    );
};

export default LayoutInventory;
