import { useParams } from "react-router-dom";

const Inventory = () => {
    const { category } = useParams();
    return (
        <div>
            {!category && <>selecciona una categoría</>}
            {category && <>hola, estás en {category}</>}
        </div>
    );
};

export default Inventory;
