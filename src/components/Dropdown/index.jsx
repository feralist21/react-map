/* eslint-disable react/prop-types */
const Dropdown = ({ list, handleClick }) => {
    return (
        <div className="absolute top-full mt-2 left-0 w-full h-auto bg-slate-500 z-10 text-white shadow-xl">
            {list.map((item) => (
                <div
                    key={item.id}
                    className="p-3 text-base cursor-pointer border-b-2 border-slate-300 last:border-0"
                    onClick={handleClick}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export { Dropdown };
