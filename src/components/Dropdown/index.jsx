const Dropdown = ({ list }) => {
    return (
        <div className="absolute top-full mt-2 left-0 w-full h-auto bg-slate-500 z-10 text-white shadow-xl">
            {list.map((item) => (
                <div
                    key={item.id}
                    className="p-3 text-base cursor-pointer border-b-2 border-slate-300 last:border-0"
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export { Dropdown };
