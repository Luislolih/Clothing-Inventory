import { useContext } from "react";
import StepSection from "../StepSection/StepSection";
import { ProviderContext } from "../../Context/ProductContext";

const InventoryAside = () => {
    const { categoryList } = useContext(ProviderContext);
    console.log(categoryList);
    return (
        <div className="principalAside">
            <aside className="asideMenu">
                {categoryList.map((category) => (
                    <StepSection
                        key={category.id}
                        title={category.name}
                        to={`/inventory/${category.path}`}
                        step="hola"
                        number={category.id}
                    />
                ))}
            </aside>
        </div>
    );
};

export default InventoryAside;
