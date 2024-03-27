import Input from "../Input/Input";

const ImageUpload = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <Input
                title="URL Imagen del Producto"
                placeholder='ejemplo: "https://mi-imagen.com"'
                value={value}
                type="text"
                onChange={onChange}
            />
        </div>
    );
};

export default ImageUpload;
