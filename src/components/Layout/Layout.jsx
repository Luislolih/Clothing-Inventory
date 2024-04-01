import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
    return (
        <div className="relative">
            <NavBar />
            <div className="lg:flex">
                <Hero></Hero>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
