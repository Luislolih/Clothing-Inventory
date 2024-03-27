import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";

const Layout = () => {
    return (
        <div className="lg:flex">
            <Hero></Hero>
            <Outlet />
        </div>
    );
};

export default Layout;
