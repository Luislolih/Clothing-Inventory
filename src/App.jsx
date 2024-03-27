import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import FirstForm from "./components/FirstForm/FirstForm";
import SecondForm from "./components/SecondForm/SecondForm";
import ThirdForm from "./components/ThirdForm/ThirdForm";
function App() {
    return (
        <BrowserRouter>
            <Routes>
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
