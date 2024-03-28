import { Outlet } from "react-router-dom";
import InventoryAside from "../../InventoryAside/InventoryAside";

const LayoutInventory = () => {
    return (
        <div className="lg:flex">
            <InventoryAside />
            <Outlet />
        </div>
    );
};

export default LayoutInventory;
