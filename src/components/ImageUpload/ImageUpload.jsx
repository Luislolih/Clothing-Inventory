import Input from "../Input/Input";

const ImageUpload = ({ value, onChange, onBlur, errors }) => {
    return (
        <div className="w-full">
            <Input
                title="URL Imagen del Producto"
                placeholder='ejemplo: "https://mi-imagen.com"'
                value={value}
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
            />
        </div>
    );
};

export default ImageUpload;
