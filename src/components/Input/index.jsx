// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, handlerChange }) => {
    return (
        <input
            className="block w-full outline-0 p-3 border-2 border-slate-500"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handlerChange}
        />
    );
};

export { Input };
