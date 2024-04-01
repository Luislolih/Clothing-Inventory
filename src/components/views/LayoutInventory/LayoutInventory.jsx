import { Outlet } from "react-router-dom";
import InventoryAside from "../../InventoryAside/InventoryAside";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const LayoutInventory = ({ showProductEdit }) => {
    return (
        <div className="flex flex-col h-screen relative ">
            <NavBar />
            <div className="flex flex-col lg:flex-row h-full">
                <InventoryAside />
                <Outlet />
            </div>
            <Footer fixedApply={showProductEdit ? true : false} />
        </div>
    );
};

export default LayoutInventory;
