import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className="relative h-full">
            <NavBar />
            <div className="lg:flex">
                <Hero></Hero>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
