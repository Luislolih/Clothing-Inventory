import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import FirstForm from "./components/FirstForm/FirstForm";
import SecondForm from "./components/SecondForm/SecondForm";
import ThirdForm from "./components/ThirdForm/ThirdForm";
import Home from "./components/views/Home/Home";
import LayoutInventory from "./components/views/LayoutInventory/LayoutInventory";
import Inventory from "./components/Inventory/Inventory";
import { useState } from "react";
function App() {
    const [showProductEdit, setShowProductEdit] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="inventory"
                    element={
                        <LayoutInventory
                            showProductEdit={showProductEdit}
                            setShowProductEdit={setShowProductEdit}
                        />
                    }
                >
                    <Route index element={<Inventory />} />
                    <Route
                        path=":category"
                        element={
                            <Inventory
                                showProductEdit={showProductEdit}
                                setShowProductEdit={setShowProductEdit}
                            />
                        }
                    />
                </Route>

                <Route path="/add" element={<Layout />}>
                    <Route index element={<FirstForm />} />
                    <Route path="basic-information" element={<FirstForm />} />
                    <Route path="details" element={<SecondForm />} />
                    <Route path="files" element={<ThirdForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
